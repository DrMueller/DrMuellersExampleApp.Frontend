import { createAction, props } from '@ngrx/store';
import { Individual } from '../../models';

export const LoadIndividual = createAction(
  '[LoadIndividual] LoadIndividuals',
  props<{ id: number }>()
);

export const LoadIndividualSuccess = createAction(
  '[LoadIndividual] LoadIndividuals Success',
  props<{ data: Individual }>()
);

export const LoadIndividualFailure = createAction(
  '[LoadIndividual] LoadIndividuals Failure',
  props<{ error: any }>()
);
