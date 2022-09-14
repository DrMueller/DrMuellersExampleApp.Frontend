import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { mergeMap } from 'rxjs/operators';
import { from, map } from 'rxjs';
import { loadCurrentUser, loadCurrentUserSuccess } from './actions/current-user.actions';
import { GraphUserService } from '../../../../core/graph/services';

@Injectable()
export class GraphEffects {
constructor(
  private actions$: Actions,
  private readonly graphUserService: GraphUserService) {
}

  loadCurrentUser$ = createEffect(() => {
    return this.actions$.pipe( 
      ofType(loadCurrentUser),
      mergeMap(() => {
        return from(this.graphUserService.getCurrentUser()).pipe(
          map((user) => loadCurrentUserSuccess({ data: user }))
        );
      })
    );
  });
}
