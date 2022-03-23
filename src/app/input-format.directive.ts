import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  @Input('format') format: any;

  constructor(private el: ElementRef) { }

  @HostListener('focus') onFocus() {
    console.log("on Focus");
  }

  @HostListener('blur') onBlur() {
    console.log("on blur");

    let value: string = this.el.nativeElement.value;

    if(this.format == 'lowercase'){
      //passando todas as letras para minuculo ao clicar fora do input
      this.el.nativeElement.value = value.toLowerCase();
    } else {
      this.el.nativeElement.value = value.toUpperCase();
    }
  }

}
