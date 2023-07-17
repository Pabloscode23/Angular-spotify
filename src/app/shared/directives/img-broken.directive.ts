import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: 'img[appImgBroken]',
    standalone: true
})
export class ImgBrokenDirective {
  @Input() customImg: string = ''
  @HostListener('error') handleError(): void {

    const elNative = this.elHost.nativeElement
    console.log('🔴Revento la imagen', this.elHost);
    if (this.customImg) {
      elNative.src = this.customImg
    } else {
      elNative.src = 'string de url'
    }
  }

  constructor(private elHost: ElementRef) {

  }
}
//me genero consola infinita