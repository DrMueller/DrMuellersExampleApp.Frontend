import { createAction, props } from '@ngrx/store';
import { IndividualOverviewEntryDto } from '../../dtos';

export const loadOverviews = createAction(
  '[Overview] Load Overviews'
);

export const loadOverviewsSuccess = createAction(
  '[Overview] Load Overviews Success',
  props<{ data: IndividualOverviewEntryDto[] }>()
);
