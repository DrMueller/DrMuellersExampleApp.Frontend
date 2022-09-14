import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromGraph from './graph.reducer';

export const selectGraphState = createFeatureSelector<fromGraph.GraphState>(
  fromGraph.graphFeatureKey
);

export const selectCurrentUser = createSelector(
  selectGraphState,
  (state) => state.currentUser
);
