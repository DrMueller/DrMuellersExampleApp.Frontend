import { createAction, props } from '@ngrx/store';
import { AppTheme } from '../models';

export const setAppTheme = createAction(
  '[app-styling] Set app theme',
  props<{
    appTheme: AppTheme
  }>()
);

export const setAppThemeSuccess = createAction(
  '[app-styling] Set app theme success',
  props<{
    appTheme: AppTheme
  }>()
);
