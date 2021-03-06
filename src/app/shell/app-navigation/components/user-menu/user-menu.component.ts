import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getUserIsAuthenticated, getUserName, logOut } from 'src/app/shell/security/state';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent implements OnInit {
  public isUserAuthenticated: boolean = false;
  public userName: string = '';

  public constructor(
    private router: Router,
    private store: Store<any>) {
  }

  public get isUserAuthenticated$(): Observable<boolean> {
    return this.store.pipe(select(getUserIsAuthenticated));
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
  }
}
