import {LevelValue} from "./level";

export class Grid {
  id: number;
  level: LevelValue;
  cells: Array<number>;
  podium : Array<{name : string, score : number}>;

  constructor(id : number, l : LevelValue, c : Array<number>) {
    this.id = id;
    this.level = l;
    this.cells = c;
    this.podium = [];
  }
}


