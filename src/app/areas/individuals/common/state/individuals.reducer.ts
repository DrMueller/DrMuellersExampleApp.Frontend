import { createReducer, on } from '@ngrx/store';
import { IndividualOverviewEntryDto } from '../dtos';
import { loadOverviewsSuccess } from './actions/overview.actions';

export const individualsFeatureKey = 'individuals';

export interface State {
  overview: IndividualOverviewEntryDto[]
}

export const initialState: State = {
  overview: []
};

export const reducer = createReducer(
  initialState,

  on(loadOverviewsSuccess, (state, action) => {
    return {
      ...state,
      overview: action.data
    }
  }),
);
