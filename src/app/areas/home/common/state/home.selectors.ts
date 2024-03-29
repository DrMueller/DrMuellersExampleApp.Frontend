import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromHome from './home.reducer';

export const selectHomeState = createFeatureSelector<fromHome.HomeState>(
  fromHome.homeFeatureKey
);

export const selectAppVersion = createSelector(
  selectHomeState,
  (state) => state.welcome.appVersion
);

export const selectAppVersionLoaded = createSelector(
  selectHomeState,
  (state) => !!state.welcome.appVersion
);
