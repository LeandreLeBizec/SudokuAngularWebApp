import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[gridBorder]'
})
export class GridBorderDirective {

  constructor(private e : ElementRef) {
    this.setBorderColor('white');
  }

  @HostListener('mouseenter') onMouseEnter(){
    this.setBorderColor('gray');
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.setBorderColor('white');
  }

  setBorderColor(borderColor : string){
    this.e.nativeElement.style.backgroundColor = `${borderColor}`;
  }

}
