import { createAction, props } from '@ngrx/store';

export const SetCurrentIndividualId = createAction(
  '[SetCurrentIndividualId] SetCurrentIndividualId',
  props<{
    id: number | undefined;
  }>()
);
