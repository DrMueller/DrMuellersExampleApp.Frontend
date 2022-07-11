import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromSecurity from './security.reducer';

export const selectSecurityState = createFeatureSelector<fromSecurity.State>(
  fromSecurity.securityFeatureKey
);

const getUserState = createSelector(
  selectSecurityState,
  state => state.user
);

export const getUserIsAuthenticated = createSelector(
  selectSecurityState,
  state => state.user.isAuthenticated
);

export const getUserToken = createSelector(
  selectSecurityState,
  state => state.user.token
);

export const getUserName = createSelector(
  selectSecurityState,
  state => state.user.userName
);
