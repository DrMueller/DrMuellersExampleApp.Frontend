import { createAction, props } from '@ngrx/store';
import { WelcomeDto } from '../../dtos';

export const loadWelcomes = createAction(
  '[Welcome] Load Welcomes'
);

export const loadWelcomesSuccess = createAction(
  '[Welcome] Load Welcomes Success',
  props<{ data: WelcomeDto }>()
);

export const loadWelcomesFailure = createAction(
  '[Welcome] Load Welcomes Failure',
  props<{ error: any }>()
);
