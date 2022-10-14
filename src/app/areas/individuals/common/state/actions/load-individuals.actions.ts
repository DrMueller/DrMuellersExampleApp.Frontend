import { createAction, props } from '@ngrx/store';
import { Individual } from '../../models';

export const LoadIndividuals = createAction(
  '[LoadIndividuals] LoadIndividuals'
);

export const LoadIndividualsSuccess = createAction(
  '[LoadIndividuals] LoadIndividuals Success',
  props<{ data: Individual[] }>()
);

export const LoadIndividualsFailure = createAction(
  '[LoadIndividuals]  LoadIndividuals Failure',
  props<{ error: any }>()
);
