import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromSecurity from './security.reducer';

export const getSecurityState =
  createFeatureSelector<fromSecurity.SecurityState>(
    fromSecurity.securityFeatureKey
  );

export const getUserIsAuthenticated = createSelector(
  getSecurityState,
  (state) => state.user.isAuthenticated
);

export const getUserToken = createSelector(
  getSecurityState,
  (state) => state.user.token
);

export const getUserName = createSelector(
  getSecurityState,
  (state) => state.user.userName
);
