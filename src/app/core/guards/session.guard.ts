import { CookieService } from 'ngx-cookie-service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionGuard implements CanActivate {

  constructor(private _cookieService: CookieService,
    private router: Router) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkCookieSession()
  }

  checkCookieSession(): boolean {

    try {
      const token: boolean = this._cookieService.check('token')
      console.log('okokok');
      if (!token) {
        this.router.navigate(['/', 'auth'])
      }
      return token
    } catch (error) {
      console.log('revisa error', error);
      return false
    }
  }
}
