import { Component, ElementRef } from '@angular/core';
import { ImgBrokenDirective } from './img-broken.directive';

@Component({
  template: '<img appImgBroken [src]= "srcMock>'
})
class TestComponent {
  public srcMock = null
}


describe('ImgBrokenDirective', () => {

  it('should create an instance', () => {
    const mockElement = new ElementRef('')
    const directive = new ImgBrokenDirective(mockElement);
    expect(directive).toBeTruthy();
  });
});
