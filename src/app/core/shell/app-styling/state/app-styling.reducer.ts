import { createReducer, on } from '@ngrx/store';
import type { AppTheme } from '../models';
import { setAppThemeSuccess } from './app-styling.actions';

export interface IAppStylingState {
  appTheme: AppTheme | undefined;
}

export const initialState: IAppStylingState = {
  appTheme: undefined,
};

export const appStylingReducer = createReducer(
  initialState,
  on(setAppThemeSuccess, (state, action) => {
    return {
      ...state,
      appTheme: action.appTheme,
    };
  })
);
