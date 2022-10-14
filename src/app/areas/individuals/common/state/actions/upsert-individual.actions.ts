import { createAction, props } from '@ngrx/store';
import { Individual } from '../../models';

export const UpsertIndividual = createAction(
  '[UpsertIndividual] UpsertIndividual',
  props<{ data: Individual }>()
);

export const UpsertIndividualSuccess = createAction(
  '[UpsertIndividual] UpsertIndividual Success',
  props<{ data: Individual }>()
);

export const UpsertIndividualFailure = createAction(
  '[UpsertIndividual] UpsertIndividual Failure',
  props<{ error: any }>()
);
