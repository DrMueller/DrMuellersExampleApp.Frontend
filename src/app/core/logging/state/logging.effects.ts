import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import { AppInsightsService } from '../services/app-insights.service';
import { userChanged } from '../../../shell/security/state';

@Injectable()
export class LoggingEffects {
  constructor(
    private appInsightsService: AppInsightsService,
    private actions$: Actions
  ) {}

  public userChanged$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(userChanged),
        tap((action) => {
          this.appInsightsService.setAuthenticatedUser(action.data?.username);
        })
      );
    },
    { dispatch: false }
  );
}
