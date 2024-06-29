import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {GameService} from "../game.service";
import {EndgameDialogBoxComponent} from "../endgame-dialog-box/endgame-dialog-box.component";
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-player-name-dialog-box',
  templateUrl: './player-name-dialog-box.component.html',
  styleUrls: ['./player-name-dialog-box.component.css']
})
export class PlayerNameDialogBoxComponent implements OnInit {
  playerName = new FormControl('', [Validators.required]);
  constructor(private dialog : MatDialog,
              private dialogRef: MatDialogRef<PlayerNameDialogBoxComponent>,
              public gameService : GameService) { }

  ngOnInit(): void {
  }

  getErrorMessage() {
    return this.playerName.hasError('required') ? 'Enter a Name' : '';
  }

  validate() {
    if(this.playerName.valid){
      this.gameService.currentGame.playerName = this.playerName.value;
      this.dialog.open(EndgameDialogBoxComponent);
      this.dialogRef.close();
    }
  }
}
