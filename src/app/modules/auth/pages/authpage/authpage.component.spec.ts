import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthpageComponent } from './authpage.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

describe('AuthpageComponent', () => {
  let component: AuthpageComponent;
  let fixture: ComponentFixture<AuthpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [HttpClientTestingModule,
        RouterTestingModule, AuthpageComponent]
})
      .compileComponents();

    fixture = TestBed.createComponent(AuthpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  //Arrange, act, assert
  it('Should return the form invalid', () => {

    const mockCredentials = {
      email: 'Emailfallo',
      password: 'fallo1234345'
    }

    const emailForm: any = component.formLogin.get('email')
    const passwordForm: any = component.formLogin.get('password')

    emailForm.setValue(mockCredentials.email)
    passwordForm.setValue(mockCredentials.password)
    expect(component.formLogin.invalid).toEqual(true)
  });
  it('Button should have "Iniciar sesión', () => {

    const elementRef = fixture.debugElement.query(By
      .css('.form-action button'))

    const getInnerText = elementRef.nativeElement.innerText

    expect(getInnerText).toEqual('Iniciar sesión')

  });
});
