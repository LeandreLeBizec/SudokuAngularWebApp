import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentGameComponent } from './current-game/current-game.component';
import { MenuComponent } from './menu/menu.component';
import { BackgroundCellDirective } from './background-cell.directive';
import {RouterLinkWithHref} from "@angular/router";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatDialogModule} from "@angular/material/dialog";
import { GridBorderDirective } from './grid-border.directive';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {InteractoModule} from "interacto-angular";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import { PodiumDialogBoxComponent } from './podium-dialog-box/podium-dialog-box.component';
import { EndgameDialogBoxComponent } from './endgame-dialog-box/endgame-dialog-box.component';
import {MatListModule} from "@angular/material/list";
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { PlayerNameDialogBoxComponent } from './player-name-dialog-box/player-name-dialog-box.component';

@NgModule({
  declarations: [
    CurrentGameComponent,
    BackgroundCellDirective,
    MenuComponent,
    GridBorderDirective,
    PodiumDialogBoxComponent,
    EndgameDialogBoxComponent,
    PlayerNameDialogBoxComponent,
  ],
  exports: [
    CurrentGameComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterLinkWithHref,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatCardModule,
    InteractoModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
  ]
})
export class GameModule { }
