import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Claim } from '../../models';
import { getUserClaims, getUserName, SecurityState } from '../../state';

@Component({
  selector: 'app-user-claims',
  templateUrl: './user-claims.component.html',
  styleUrls: ['./user-claims.component.scss'],
})
export class UserClaimsComponent {
  constructor(private readonly store: Store<SecurityState>) {}

  public get userClaims$(): Observable<Claim[]> {
    return this.store.select(getUserClaims);
  }

  public get userName$(): Observable<string> {
    return this.store.select(getUserName);
  }
}
