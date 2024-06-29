import {UndoableCommand} from "interacto";
import {CurrentGameComponent} from "./current-game/current-game.component";

export class SetValue extends UndoableCommand{
  newValue : number;
  index : number;
  game : CurrentGameComponent;

  public constructor(newValue: number, index: number, game: CurrentGameComponent) {
    super();
    this.newValue = newValue;
    this.index = index;
    this.game = game;
  }

  public override createMemento(){
  }

  public override canExecute(): boolean {
    return this.game?.grid?.cells[this.index] !== this.newValue;
  }

  protected execution(): Promise<void> | void {
    this.game?.setValue(this.index, this.newValue);
  }

  redo(): void {
    this.game?.setValue(this.index, this.newValue);
  }

  undo(): void {
    this.game?.undoValue(this.index);
  }

  public override getVisualSnapshot(): Promise<HTMLElement> | HTMLElement | undefined {
    return SetValue.getSnapshot(this.game, this.index);
  }


  public static getSnapshot(game : CurrentGameComponent, indexChanged? : number): HTMLImageElement {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d")!;
    const tileSize = 110;
    canvas.width = 1000;
    canvas.height = 1000;
    ctx.font = '100px Bodo';

    if(indexChanged && game && game.grid){
      // fond violet si coup joué et il y a plusieurs valeurs possibles en mode suggestion
      if(game.helpMode){
        if(game.printPossiblePlay(indexChanged).length != 0){
          ctx.fillStyle = 'purple';
          ctx.fillRect(0, 0, canvas.width, canvas.height);
        }
      }
      // fond rouge s'il y a une erreur
      if(!CurrentGameComponent.simpleCheck(indexChanged, game.grid.cells[indexChanged], game)){
        ctx.fillStyle = 'red';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
    }

    // police color
    if(game && game.grid && indexChanged){
      for (let i = 0; i < game.grid.cells.length; i++){
        if(i==indexChanged){
          ctx.fillStyle = 'green';
        }else{
          ctx.fillStyle = 'black';
        }
        ctx.fillText(game.grid.cells[i] == 0 ? "" : game.grid.cells[i].toString(), (i % 9) * tileSize + 30, Math.floor(i / 9) * tileSize + 85);
      }
    }

    for(let i = 1; i < 9; i++) {
      ctx.moveTo(i * tileSize, 0);
      ctx.lineTo(i * tileSize, canvas.height);
      ctx.moveTo(0, i * tileSize);
      ctx.lineTo(canvas.width, i * tileSize);
    }
    ctx.stroke(); // Draw the content
    const imgCache = new Image();
    imgCache.src = canvas.toDataURL("image/png");
    return imgCache;
  }

}
