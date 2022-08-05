import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { allThemes, AppTheme } from 'src/app/shell/app-styling/models';
import { getAppTheme, setAppTheme } from 'src/app/shell/app-styling/state';
import { getUserIsAuthenticated, getUserName, logOut } from 'src/app/shell/security/state';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent implements OnInit {
  private _selectedApppTheme?: AppTheme;

  public appThemes: AppTheme[] = allThemes;
  public isUserAuthenticated: boolean = false;
  public userName: string = '';

  public constructor(
    private router: Router,
    private store: Store<any>) {
  }

  public get isUserAuthenticated$(): Observable<boolean> {
    return this.store.pipe(select(getUserIsAuthenticated));
  }

  public get selectedApppTheme(): AppTheme | undefined {
    return this._selectedApppTheme;
  }

  public set selectedApppTheme(appTheme: AppTheme | undefined) {
    this._selectedApppTheme = appTheme;

    if (appTheme) {
      this.store.dispatch(setAppTheme({
        appTheme: appTheme
      }))
    }
  }

  public logIn(): void {
    this.router.navigate(['login']);
  }

  public logOut(): void {
    this.store.dispatch(logOut());
    this.router.navigate(['home']);
  }

  public ngOnInit(): void {
    this.store.pipe(select(getUserName)).subscribe(name => {
      this.userName = name;
    });

    this.store.select(getAppTheme).subscribe(appTheme => {
      if (appTheme !== this.selectedApppTheme) {
        this.selectedApppTheme = appTheme;
      }
    });
  }

  public showClaims(): void {
    this.router.navigate(['claims']);
  }
}
