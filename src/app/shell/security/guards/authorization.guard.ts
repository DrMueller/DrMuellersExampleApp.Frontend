import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { IAppState } from '../../app-state';
import { getUserIsAuthenticated } from '../state/security.selectors';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationGuard implements CanActivate {
  constructor(
    private router: Router,
    private store: Store<IAppState>) {
  }

  public canActivate(_: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.store.pipe(
      select(getUserIsAuthenticated),
      select(isLoggedIn => {
        if (isLoggedIn) {
          return true;
        }
        this.router.navigate(['/home'], { queryParams: { returnUrl: state.url } });
        return false;
      }));
  }
}
