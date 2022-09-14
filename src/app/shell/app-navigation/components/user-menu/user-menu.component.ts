import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { allThemes, AppTheme } from 'src/app/shell/app-styling/models';
import { getAppTheme, setAppTheme } from 'src/app/shell/app-styling/state';
import {
  selectUserIsAuthenticated,
  selectUserName,
  logIn,
  logOut,
} from 'src/app/shell/security/state';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss'],
})
export class UserMenuComponent implements OnInit {
  private _selectedAppTheme!: AppTheme;

  public isUserAuthenticated: boolean = false;
  public userName: string = '';

  public constructor(private router: Router, private store: Store<any>) {}

  public get isUserAuthenticated$(): Observable<boolean> {
    return this.store.select(selectUserIsAuthenticated);
  }

  public get selectedAppTheme(): AppTheme {
    return this._selectedAppTheme;
  }

  public switchAppTheme(): void {
    let selectedAppTheme: AppTheme;
    if (this.selectedAppTheme.key === allThemes[0].key) {
      selectedAppTheme = allThemes[1];
    } else {
      selectedAppTheme = allThemes[0];
    }

    this.store.dispatch(
      setAppTheme({
        appTheme: selectedAppTheme,
      })
    );
  }

  public logIn(): void {
    this.store.dispatch(logIn());
  }

  public logOut(): void {
    this.store.dispatch(logOut());
    this.router.navigate(['home']);
  }

  public ngOnInit(): void {
    this.store.pipe(select(selectUserName)).subscribe((name) => {
      this.userName = name;
    });

    this.store.select(getAppTheme).subscribe((appTheme) => {
      if (appTheme) {
        this._selectedAppTheme = appTheme;
      }
    });
  }

  public showClaims(): void {
    this.router.navigate(['claims']);
  }
}
