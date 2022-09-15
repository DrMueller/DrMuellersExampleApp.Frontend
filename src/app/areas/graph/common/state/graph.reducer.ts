import { User } from '@microsoft/microsoft-graph-types';
import { createReducer, on } from '@ngrx/store';
import { loadCurrentUserSuccess } from './actions/current-user.actions';

export const graphFeatureKey = 'graph';

export interface GraphState {
  currentUser: User | undefined;
}

export const initialState: GraphState = {
  currentUser: undefined,
};

export const reducer = createReducer(
  initialState,

  on(loadCurrentUserSuccess, (state, action) => {
    return {
      ...state,
      currentUser: action.data,
    };
  })
);
