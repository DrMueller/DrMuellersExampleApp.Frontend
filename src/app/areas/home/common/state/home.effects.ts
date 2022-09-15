import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { loadWelcomes, loadWelcomesSuccess } from './actions/welcome.actions';
import { WelcomeService } from '../../overview/services/welcome.service';

@Injectable()
export class HomeEffects {
  loadHomes$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadWelcomes),
      mergeMap(() =>
        this.welcomeService
          .getWelcome$()
          .pipe(map((welcomeDto) => loadWelcomesSuccess({ data: welcomeDto })))
      )
    );
  });

  constructor(
    private actions$: Actions,
    private readonly welcomeService: WelcomeService
  ) {}
}
