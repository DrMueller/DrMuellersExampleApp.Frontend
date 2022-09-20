import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromSecurity from './security.reducer';

export const selectSecurityState =
  createFeatureSelector<fromSecurity.SecurityState>(
    fromSecurity.securityFeatureKey
  );

export const selectUserIsAuthenticated = createSelector(
  selectSecurityState,
  (state) => state.account !== null
);

export const selectUserName = createSelector(
  selectSecurityState,
  (state) => state.account?.name
);

export const selectAccount = createSelector(
  selectSecurityState,
  (state) => state.account
);

export const selectUserClaims = createSelector(
  selectSecurityState,
  (state) => state.userClaims
);
