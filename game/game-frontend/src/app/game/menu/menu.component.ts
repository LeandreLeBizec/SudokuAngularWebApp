import {Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Grid} from "../grid";
import {GameService} from "../game.service";
import {LevelValue, LEVELS} from "../level";
import {FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit{
  gridList : Grid[]=[];
  playerName = new FormControl('', [Validators.required]);
  levels= LEVELS;
  level!: LevelValue;


  constructor(private router : Router, private gameService : GameService) { }

  ngOnInit() {
    this.gameService.getGridsList().subscribe(data => this.gridList = data);
  }

  getErrorMessage() {
    return this.playerName.hasError('required') ? 'A random name will be assigned' : '';
  }


  navigateToGame(grid : Grid|undefined){
    const checkboxElement = document.getElementById('sugg') as HTMLInputElement;
    const isChecked = checkboxElement.checked;
    if(this.playerName.valid){
        this.router.navigate(['/menu', grid?.id],{ queryParams: { name: this.playerName.value, help: isChecked }});
    }else{
      this.playerName.setValue("Player" + Math.floor(Math.random() * 1000));
      this.router.navigate(['/menu', grid?.id], {queryParams: {name: this.playerName.value, help: isChecked}});
    }
  }
  goToGame(grid : Grid){
    this.navigateToGame(grid);
  }

  goToNewGame(){
    this.gameService.generateNewGrid(this.level)
      .then((grid) => this.gameService.postGrid(grid))
      .then((grid) => grid.subscribe((grid) => this.navigateToGame(grid)));
  }

}
