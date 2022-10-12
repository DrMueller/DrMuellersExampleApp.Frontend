import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromIndividuals from './individuals.reducer';

export const selectIndividualsState = createFeatureSelector<fromIndividuals.State>(
  fromIndividuals.individualsFeatureKey
);

export const selectOverview = createSelector(
  selectIndividualsState,
  (state) => state.overview
);
