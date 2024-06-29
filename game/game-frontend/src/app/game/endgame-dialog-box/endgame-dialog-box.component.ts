import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {PodiumDialogBoxComponent} from "../podium-dialog-box/podium-dialog-box.component";
import {Router} from "@angular/router";
import {GameService} from "../game.service";


@Component({
  selector: 'app-endgame-dialog-box',
  templateUrl: './endgame-dialog-box.component.html',
  styleUrls: ['./endgame-dialog-box.component.css']
})
export class EndgameDialogBoxComponent implements OnInit {
  id : number =0;
  playerName : string|undefined|null;
  score : number = 0;
  constructor(private dialogRef: MatDialogRef<PodiumDialogBoxComponent>, private router : Router, private gameService : GameService){}

  ngOnInit(): void {
    this.playerName = this.gameService.currentGame.playerName
    this.score = this.gameService.currentGame.score;
  }

  goMenu() {
    this.gameService.postScore().subscribe();
    this.router.navigate(['/menu']);
    this.dialogRef.close();
  }

}
