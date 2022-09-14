import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromSecurity from './security.reducer';

export const selectSecurityState =
  createFeatureSelector<fromSecurity.SecurityState>(
    fromSecurity.securityFeatureKey
  );

export const selectUserIsAuthenticated = createSelector(
  selectSecurityState,
  (state) => state.user.isAuthenticated
);

export const selectUserToken = createSelector(
  selectSecurityState,
  (state) => state.user.token
);

export const selectUserName = createSelector(
  selectSecurityState,
  (state) => state.user.userName
);
