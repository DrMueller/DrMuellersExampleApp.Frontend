import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs';

import { IndividualsDataService } from '../services/individuals-data.service';
import { loadOverviews, loadOverviewsSuccess } from './actions/overview.actions';

@Injectable()
export class IndividualsEffects {
  constructor(
    private actions$: Actions,
    private dataService: IndividualsDataService) {
  }

  loadOverview$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadOverviews),
      mergeMap(() =>
        this.dataService
        .overview$
          .pipe(map((welcomeDto) => loadOverviewsSuccess({ data: welcomeDto })))
      )
    );
  });
}
