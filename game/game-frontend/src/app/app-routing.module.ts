import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {MenuComponent} from "./game/menu/menu.component";
import {CurrentGameComponent} from "./game/current-game/current-game.component";

const routes: Routes = [
  {path : 'menu', component : MenuComponent},
  {path : 'menu/:id', component : CurrentGameComponent},
  {path : '', redirectTo : 'menu', pathMatch : 'full'},
  {path : '**', component : PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
