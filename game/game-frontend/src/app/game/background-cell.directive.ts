import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[cellBackground]'
})
export class BackgroundCellDirective {

  constructor(private e : ElementRef) {
    this.setBackGroundColor('white');
  }
  //Quand on passe la souris sur une case, elle se grise
  @HostListener('mouseenter') onMouseEnter(){
    if(this.e.nativeElement.style.backgroundColor == "white"){
      this.setBackGroundColor('gray');
    }
  }

  //Quand la souris part, elle redevient blanche
  @HostListener('mouseleave') onMouseLeave(){
    if(this.e.nativeElement.style.backgroundColor == "gray"){
      this.setBackGroundColor('white');
    }
  }

  //Pas compris cette méthode
  setBackGroundColor(backGroundColor : string){
    this.e.nativeElement.style.backgroundColor = `${backGroundColor}`;
  }
}
