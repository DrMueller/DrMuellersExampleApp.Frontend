import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppSettingsSingletonService } from 'src/app/core/app-settings/services';

import { IAppState } from '../../app-state';
import { InitializeUserAction } from '../../security/state/actions/initialize-user.action';

@Injectable({
  providedIn: 'root'
})
export class AppInitService {
  constructor(
    private appSettingsSingleton: AppSettingsSingletonService,
    private store: Store<IAppState>
  ) { }

  public async initializeAppAsync(): Promise<void> {
    await this.appSettingsSingleton.initializeAsync();
    this.store.dispatch(new InitializeUserAction());
  }
}
