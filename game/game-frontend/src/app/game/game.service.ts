import { Injectable } from '@angular/core';
import {Grid} from "./grid";
import { LevelValue} from "./level";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Game} from "./Game";
import {catchError, Observable, of, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private static _currentGame : Game;
  grid : Grid | undefined;

  constructor(private http: HttpClient){ }

  public get currentGame() : Game{
    return GameService._currentGame;
  }

  public set currentGame(currentGame : Game){
    GameService._currentGame = currentGame;
  }

  private log(response : any){
    console.table(response);
  }

  private handleError(error : Error, errorValue : any){
    console.error(error);
    return of(errorValue);
  }

  getGridsList() : Observable<Grid[]>{
    return this.http.get<Grid[]>('api/game/grids').pipe(
      tap((gridsList) => this.log(gridsList)),
      catchError((error) => this.handleError(error, [])));
  }

  getGridById(gridId : number) : Observable<Grid|undefined>{
    return this.http.get<Grid>(`/api/game/grid/${gridId}`).pipe(
      tap((grid) => this.log(grid)),
      catchError((error) => this.handleError(error, undefined)));
  }


  getPodium(gridId : number) : Observable<[]>{
    return this.http.get<[]>(`/api/game/grid/podium/${gridId}`).pipe(
      tap((grid) => this.log(grid)),
      catchError((error) => this.handleError(error, undefined)));
  }


  generateNewGrid(level : LevelValue) : Promise<Grid>{
    return new Promise<Grid>((resolve, reject) => {
      this.http.get(`sudoku-provider/${level}`,{'responseType': 'text'}).subscribe((data) => {
        this.grid = new Grid(0, level, data.split('').map((n) => +n));
        resolve(this.grid);
        },
        (error) => {
          // Rejeter la promesse en cas d'erreur de la requête HTTP
          reject(error);
        }
      );
    });
  }


  postGrid(grid: void|Grid) : Observable<Grid|undefined>{
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    let data = JSON.stringify(grid);
    return this.http.post(`/api/game/generated`, data, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, undefined)));
  }

  postScore() : Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }

    return this.http.post(`/api/game/podium/${this.currentGame.grid.id}/${this.currentGame.playerName}/${this.currentGame.score}`, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, [])));
  }

}
