import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { Individual } from '../models';
import { LoadIndividualSuccess } from './actions/load-individual.actions';
import { LoadIndividualsSuccess } from './actions/load-individuals.actions';
import { SetCurrentIndividualId } from './actions/set-current-individual-id.actions';
import { UpsertIndividualSuccess } from './actions/upsert-individual.actions';

export const individualsFeatureKey = 'individuals';

export interface State {
  individuals: EntityState<Individual>;
  currentIndividualId: number | undefined;
}

export const adapter: EntityAdapter<Individual> =
  createEntityAdapter<Individual>({
    selectId: (f) => f.id,
    sortComparer: false,
  });

export const {
  selectIds: selectIds,
  selectEntities: selectEntities,
  selectAll: selectAll,
  selectTotal: selectTotal,
} = adapter.getSelectors();

export const initialState: State = {
  individuals: adapter.getInitialState(),
  currentIndividualId: undefined,
};

export const reducer = createReducer(
  initialState,
  on(LoadIndividualSuccess, (state, action) => {
    return {
      ...state,
      individuals: adapter.upsertOne(action.data, state.individuals),
    };
  }),
  on(UpsertIndividualSuccess, (state, action) => {
    return {
      ...state,
      individuals: adapter.upsertOne(action.data, state.individuals),
    };
  }),
  on(SetCurrentIndividualId, (state, action) => {
    return {
      ...state,
      currentIndividualId: action.id,
    };
  }),
  on(LoadIndividualsSuccess, (state, action) => {
    return {
      ...state,
      individuals: adapter.upsertMany(action.data, state.individuals),
    };
  })
);
