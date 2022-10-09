import { Injectable } from '@angular/core';
import { Actions, createEffect } from '@ngrx/effects';
import { tap } from 'rxjs';
import { LoggingService } from '../../../core/logging/services/logging.service';

@Injectable()
export class MetaEffects {
  constructor(
    private loggingService: LoggingService,
    private actions$: Actions
  ) {}

  public logAction$ = createEffect(
    () => {
      return this.actions$.pipe(
        tap((action) =>
          this.loggingService.logInformation(`Action: ${action.type}`)
        )
      );
    },
    { dispatch: false }
  );
}
