import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Grid} from "../grid";
import {PartialPointBinder, TreeUndoHistory, UndoableSnapshot} from "interacto";
import {SetValue} from "../set-value";
import {MatDialog} from "@angular/material/dialog";
import {PodiumDialogBoxComponent} from "../podium-dialog-box/podium-dialog-box.component";
import {GameService} from "../game.service";
import {PartialMatSelectBinder} from "interacto-angular";
import {EndgameDialogBoxComponent} from "../endgame-dialog-box/endgame-dialog-box.component";
import {ActivatedRoute} from "@angular/router";
import {Game} from "../Game";
import {PlayerNameDialogBoxComponent} from "../player-name-dialog-box/player-name-dialog-box.component";


@Component({
  selector: 'app-display-game',
  templateUrl: './current-game.component.html',
  styleUrls: ['./current-game.component.css'],
  encapsulation: ViewEncapsulation.None,
})

export class CurrentGameComponent implements OnInit{
  grid : Grid | undefined;
  playerName : string | null | undefined;
  score : number = 0;
  helpMode : boolean = false;
  possiblePlay : Array<number> | undefined;
  constructor(private route : ActivatedRoute, public gameService : GameService, private dialog : MatDialog, private undoHistory : TreeUndoHistory) { }

  ngOnInit() {
    // récupérer l'id contenue dans l'URL
    const gridId : string|null = this.route.snapshot.paramMap.get('id');
    if(gridId){
      this.gameService.getGridById(Number(gridId)).subscribe(data => {
        this.grid = data;
        if(this.grid){
          //Créer la Game
          this.gameService.currentGame = new Game(this.grid, this.playerName);
        }
      });
    }

    // récupérer le nom contenu dans l'URL
    const gridPlayerName : string|null = this.route.snapshot.queryParamMap.get('name');
    if(gridPlayerName){
      this.playerName = gridPlayerName;
    }

    // récupérer l'état de help dans l'URL
    const currentMode : string|null = this.route.snapshot.queryParamMap.get('help');
    if(currentMode == "true"){
      this.helpMode = true;
    }

    // Reset l'historique entre chaque partie
    this.undoHistory.clear();

    // Désactive l'apparition du menu contextuel du click droit sur la page de jeu pour éviter
    // les conflits avec l'auto-completion
    document.addEventListener('contextmenu', this.onContextMenu);
  }

  // Permet de colorier une cellule du front passé en paramètre d'une couleur passé en paramètre
  public colorCell(index : number, color : string){
    let cell =  document.getElementById('cells[' + index + ']');
    if(cell){
      cell.style.backgroundColor = color;
    }
  }


  // Vérifie les lignes et colones et appel colorCell
  public valueCheck(cellId : number, valeur : number, color : string){
    //Line
    for (let i = 0; i < 9; i++) {
      if(this.grid?.cells[Math.trunc(cellId/9)*9 + i] === valeur){
        let defaultCell = Math.trunc(cellId/9)*9 + i;
        this.colorCell(defaultCell, color);
        this.colorCell(cellId, color);
      }
    }
    //Column
    for (let i = 0; i < 9; i++) {
      if (this.grid?.cells[(cellId%9) + i*9] === valeur) {
        let defaultCell = (cellId%9) + i*9;
        this.colorCell(defaultCell, color);
        this.colorCell(cellId, color);
      }
    }
  }

  // Méthode static à appeler dans setValue
  public static simpleCheck(cellId : number, valeur : number, game : CurrentGameComponent): boolean {
    let check = true;
    if(game && game.grid){
      //Line
      for (let i = 0; i < 9; i++) {
        if(game.grid.cells[Math.trunc(cellId/9)*9 + i] === valeur && Math.trunc(cellId/9)*9 + i != cellId){
          check = false;
        }
      }
      //Column
      for (let i = 0; i < 9; i++) {
        if (game.grid.cells[(cellId%9) + i*9] === valeur && (cellId%9) + i*9 != cellId) {
          check = false;
        }
      }
    }
    return check;
  }

  updateScore(){
    this.gameService.currentGame.score += 1;
    this.score = this.gameService.currentGame.score;
  }

  completeGrid() : boolean{
    if(this.grid){
      for(let i=0; i<this.grid.cells.length; i++ ){
        if(this.grid.cells[i] == 0){
          return false;
        }
      }
    }
    return true;
  }

  correctGrid() : boolean {
    if (this.grid) {
      if (this.completeGrid()) {
        for (let i = 0; i < this.grid.cells.length; i++) {
          if (!CurrentGameComponent.simpleCheck(i, this.grid.cells[i], this)){
            return false;
          }
        }
        return true;
      }
    }
    return false;
  }

  public setValue(cellId : number, value : number){
    console.log(this.gameService.currentGame)
    if(this.grid){
      this.valueCheck(cellId, value, "red");
      this.grid.cells[cellId]=value;
      this.updateScore();
      if(this.correctGrid()){
        this.openEndGameDialogBox();
      }
    }
  }

  // remet la case en blanc lors de l'undo
  public undoValue(cellId : number){
    if(this.grid){
      this.valueCheck(cellId, this.grid.cells[cellId], "white");
      this.grid.cells[cellId]=0;
    }
  }

  public historySetValue(binder: PartialMatSelectBinder, index: number) {
    binder.toProduce(i => new SetValue(i.change?.value, index, this))
      .bind();
  }

  // Interacto binding that maps a click with the right button on an Angular Material Select
  // for producing an undoable command SetValue that directly uses the single suggested value
  public directSet(binder: PartialPointBinder, index: number) {
    binder
      .toProduce(() => new SetValue(this.printPossiblePlay(index)[0], index, this))
      .when(i => i.button === 2)
      .bind();
  }

  // Ralentit la directive backround cell, il suffit d'enlever rootRenderer dans le front pour qu'elle soit à nouveau réactive
  public rootRenderer() : UndoableSnapshot{
    return SetValue.getSnapshot(this);
  }

  // désactive le menu contextuel du clic droit
  onContextMenu(event: Event) {
    event.preventDefault();
  }


//---------------------------------------------Suggestion---------------------------------------------------------------

  // récupère tous les chiffres présents sur les lignes et colones et les soustraits à lal liste des coups possibles
  public printPossiblePlay(cellId : number) : Array<number> {
    this.possiblePlay = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    //Line
    for (let i = 0; i < 9; i++) {
      let val = this.grid?.cells[Math.trunc(cellId / 9) * 9 + i];
      if (val) {
        let indexToRemove = this.possiblePlay.indexOf(val);
        if (indexToRemove != -1) {
          this.possiblePlay.splice(indexToRemove, 1);
        }
      }
    }
    //Column
    for (let i = 0; i < 9; i++) {
      let val = this.grid?.cells[(cellId % 9) + i * 9];
      if (val) {
        let indexToRemove = this.possiblePlay.indexOf(val);
        if (indexToRemove != -1) {
          this.possiblePlay.splice(indexToRemove, 1);
        }
      }
    }
    return this.possiblePlay;
  }

//-----------------------------------------------Pop-Up-----------------------------------------------------------------

  openPodiumDialogBox() {
    this.dialog.open(PodiumDialogBoxComponent);
  }

  openEndGameDialogBox(){
    const playerIdRegex = /^Player\d+$/;
    if(this.playerName){
      if(playerIdRegex.test(this.playerName)){
        this.dialog.open(PlayerNameDialogBoxComponent);
      }else{
        this.dialog.open(EndgameDialogBoxComponent);
      }
    }
  }

}
