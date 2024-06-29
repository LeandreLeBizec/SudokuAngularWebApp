import {Grid} from "./grid";

export class Game{
  playerName : string | null | undefined;
  grid : Grid;
  score : number;

  constructor(g : Grid, pn : string|null|undefined) {
    this.playerName = pn;
    this.grid = g;
    this.score=0;
  }

}
