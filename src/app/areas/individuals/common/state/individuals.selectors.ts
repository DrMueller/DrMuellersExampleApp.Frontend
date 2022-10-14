import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IndividualOverviewEntryVm } from '../view-models';
import * as fromIndividuals from './individuals.reducer';

export const selectIndividualsState = createFeatureSelector<fromIndividuals.State>(
  fromIndividuals.individualsFeatureKey
);

export const selectIndividualsOverview = createSelector(
  selectIndividualsState,
  state => Object.values(state.individuals.entities)
  .map(ind => <IndividualOverviewEntryVm>{
      birthdate: ind!.birthdate,
      firstName: ind!.firstName,
      id: ind!.id,
      lastName: ind!.lastName
  })
);

export const selectCurrentIndividualId = createSelector(
  selectIndividualsState,
  state => state.currentIndividualId
);

export const selectCurrentIndividual = createSelector(
  selectIndividualsState,
  selectCurrentIndividualId,
  (state, indId) => {
    return indId ? state.individuals.entities[indId] : undefined;
  }
);
