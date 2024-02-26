import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[shadow]',
  standalone: true
})
export class ShadowDirective {

  constructor(private domElement:ElementRef) { 
    
    }
    @HostListener('mouseenter') shadow(){
      this.onMouseEnter()
    }
    @HostListener('mouseout') unshadow(){
      this.onMouseOut()
    }
    private onMouseEnter(){
      this.domElement.nativeElement.style.borderRadius = '10px';
      this.domElement.nativeElement.style.boxShadow = '0 4px 8px 0 rgba(0,0,0,0.2)';
    }
    private onMouseOut(){
      this.domElement.nativeElement.style.borderRadius = '5px';
      this.domElement.nativeElement.style.boxShadow = 'none';
    }
  }



