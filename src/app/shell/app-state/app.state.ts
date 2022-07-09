import * as fromRouter from '@ngrx/router-store';
import { RouterReducerState, getSelectors } from '@ngrx/router-store';
import { createFeatureSelector } from '@ngrx/store';
import { initialSecurityState, ISecurityState } from '../security/state';

export const routerFeatureKey = 'router';
export const selectRouter = createFeatureSelector<RouterReducerState>('router');

export const {
  selectQueryParams,    // select the current route query params
  selectQueryParam,     // factory function to select a query param
  selectRouteParams,    // select the current route params
  selectRouteParam,     // factory function to select a route param
  selectRouteData,      // select the current route data
  selectUrl,            // select the current url
} = getSelectors();

export const initialAppState: IAppState = {
  router: <RouterReducerState<any>>{
    navigationId: 0,
    state: undefined
  },
  security: initialSecurityState,
};

export interface IAppState {
  router: fromRouter.RouterReducerState<any>;
  security: ISecurityState;
}
