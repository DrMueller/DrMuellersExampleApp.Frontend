import { Injectable } from '@angular/core';

import { AppNavigationEntry } from '../models';

@Injectable({
  providedIn: 'root'
})
export class AppNavigationEntryFactoryService {
  private _cache: Array<AppNavigationEntry> | null = null;

  public createNavigationEntries(): AppNavigationEntry[] {
    this.assureInitialized();
    return this._cache!;
  }

  private assureInitialized(): void {
    if (this._cache !== null) {
      return;
    }

    this._cache = [
      new AppNavigationEntry('Home', 'home'),
    ];
  }
}
