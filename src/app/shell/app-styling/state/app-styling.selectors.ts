import { createFeatureSelector, createSelector } from '@ngrx/store';
import type { IAppStylingState } from './app-styling.reducer';

export const appStylingFeatureKey = 'app-styling';

const getAppStylingState = createFeatureSelector<IAppStylingState>(appStylingFeatureKey);

export const getAppTheme = createSelector(
  getAppStylingState,
  state => state.appTheme
);
