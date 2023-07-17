import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-authpage',
    templateUrl: './authpage.component.html',
    styleUrls: ['./authpage.component.css'],
    standalone: true,
    imports: [ReactiveFormsModule, NgIf]
})
export class AuthPageComponent implements OnInit {

  errorSession: boolean = false

  formLogin: FormGroup = new FormGroup({});

  constructor(private _authService: AuthService,
    private cookie: CookieService,
    private router: Router) { }
  ngOnInit(): void {
    this.formLogin = new FormGroup(
      {
        email: new FormControl('', [
          Validators.required, //que exista
          Validators.email,

        ]),
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(12)]),
      })
  }
  sendLogin(): void {
    const { email, password } = this.formLogin.value
    this._authService.sendCredentials(email, password)
      .subscribe(responseOK => {
        console.log('Session iniciada correcta');
        const { tokenSession, data } = responseOK;
        this.cookie.set('token', tokenSession, 4, '/')
        this.router.navigate(['/', 'tracks'])
      },
        // err => {
        //this.errorSession = true
        //   console.log('Ocurre error en el login ');

        // }
      )
  }
}
