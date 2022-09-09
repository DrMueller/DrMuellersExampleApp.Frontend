import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/app/environments/environment';

import { IAppState, routerFeatureKey } from '.';
import { AppStylingModule } from '../app-styling';

const reducers: ActionReducerMap<IAppState> = {
  router: routerReducer,
};

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreRouterConnectingModule.forRoot({ stateKey: routerFeatureKey }),
    StoreModule.forRoot(reducers, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      },
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot(),
    AppStylingModule,
  ],
})
export class AppStateModule {}
