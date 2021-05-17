import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from '../services/auth.service';
import {map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const {requireAuth} = route.data;
    return this.auth.isAuth$.pipe(
      map(canActivate => requireAuth === undefined ? canActivate : !canActivate),
      tap(canActivate => {
        console.log({requireAuth}, canActivate, state.url);
        if (!canActivate) {
          this.router.navigate(['/', 'auth', 'login']);
        }
      }));
  }
}
