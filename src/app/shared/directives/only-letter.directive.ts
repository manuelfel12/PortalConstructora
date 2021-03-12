import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[OnlyLetter]'
})
export class OnlyLetterDirective {

  @Input() OnlyLetter: boolean;

  constructor(private elemDom: ElementRef, private renderer: Renderer2) {
    console.log('DOM', elemDom.nativeElement);
    console.log('directiva OnlyLetter OK');
    renderer.setStyle(elemDom.nativeElement, "color", "Red");
  }


  @HostListener("keydown", ["$event"]) onKeyDown(event: KeyboardEvent) {
    debugger;

    if (this.OnlyLetter) {
      if ((event.keyCode > 64 && event.keyCode < 91) || event.keyCode == 8 || event.keyCode == 32) {
        // let it happen, don't do anything
        return;
      } else {
        event.preventDefault();
      }
    }
  }

}
