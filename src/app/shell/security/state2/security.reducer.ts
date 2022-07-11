import { Action, createReducer, on } from '@ngrx/store';
import { SecurityUser } from '../models';
import * as SecurityActions from './security.actions';

export const securityFeatureKey = 'security';

export interface State {
  user: SecurityUser
}

export const initialState: State = {
  user: new SecurityUser()
};

export const reducer = createReducer(
  initialState,
  on(
    SecurityActions.userChanged,
    (state, action) => {
      return {
        ...state,
        user: action.data
      }
    })
);
