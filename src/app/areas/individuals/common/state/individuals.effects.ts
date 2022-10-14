import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { routerNavigatedAction } from '@ngrx/router-store';
import { Store } from '@ngrx/store';
import { filter, map, mergeMap } from 'rxjs';
import { IAppState, selectRouteParam } from '../../../../shell/app-state';
import { IndividualsDataService } from '../services/individuals-data.service';
import { LoadIndividual, LoadIndividualSuccess } from './actions/load-individual.actions';
import { LoadIndividuals, LoadIndividualsSuccess } from './actions/load-individuals.actions';
import { SetCurrentIndividualId } from './actions/set-current-individual-id.actions';
import { UpsertIndividual, UpsertIndividualSuccess } from './actions/upsert-individual.actions';
import { State } from './individuals.reducer';
import { selectCurrentIndividual } from './individuals.selectors';

@Injectable()
export class IndividualsEffects {
  constructor(
    private store: Store<State>,
    private appStore: Store<IAppState>,
    private actions$: Actions,
    private dataService: IndividualsDataService) {
  }

  // TODO you shouldnt use store here?
  setCurrentIndividuaId$ = createEffect(() =>
  this.actions$.pipe(
    ofType(routerNavigatedAction),
    mergeMap(() => this.appStore.select(selectRouteParam('individualId')).pipe(
      map(val => SetCurrentIndividualId({
        id: val ? parseInt(val) : undefined
      }))
    ))
  )
  );


  loadIfNotExisting$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SetCurrentIndividualId),
      map(f => f.id),
      filter(id => id !== undefined),
      filter(id => id != -1),
      concatLatestFrom(() => this.store.select(selectCurrentIndividual)),
      filter((res) => !res[1]),
      map((res) => LoadIndividual({
        id: res[0]!
      }))
    )
  );

  load$ = createEffect(
    () => this.actions$.pipe(
      ofType(LoadIndividual),
      mergeMap(ind => this.dataService.load$(ind.id).pipe(
        map(entry => LoadIndividualSuccess({
          data: entry
        }))
      ))
    )
  );

  loadAll$ = createEffect(
    () => this.actions$.pipe(
      ofType(LoadIndividuals),
      mergeMap(() => this.dataService.loadAll$().pipe(
        map(entries => LoadIndividualsSuccess({
          data: entries
        }))
      ))
    )
  );

  upsert$ = createEffect(
    () => this.actions$.pipe(
      ofType(UpsertIndividual),
      mergeMap(act => this.dataService.upsert$(act.data).pipe(
        map(entry => UpsertIndividualSuccess({
          data: entry
        }))
      ))
    )
  );
}
