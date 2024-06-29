import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {GameService} from "../game.service";


@Component({
  selector: 'app-podium-dialog-box',
  templateUrl: './podium-dialog-box.component.html',
  styleUrls: ['./podium-dialog-box.component.css']
})

export class PodiumDialogBoxComponent implements OnInit {

  podium : Array<{ name: string; score: number }> | undefined;
  constructor(private dialogRef: MatDialogRef<PodiumDialogBoxComponent>, public gameService : GameService) {

  }

  ngOnInit(): void {
    this.gameService.getPodium(this.gameService.currentGame.grid.id).subscribe((data)=> {
      this.podium = data;
      this.podium.sort((a, b) => a.score - b.score); //trie dans l'ordre croissant des scores
      this.podium = this.podium.slice(0, 5); //Garde les 5 premières valeurs pour n'avoir que le top 5
    })
  }

  close() {
    this.dialogRef.close();
  }

}
