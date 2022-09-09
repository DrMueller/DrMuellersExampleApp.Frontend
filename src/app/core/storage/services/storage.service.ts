import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  public load<T>(key: string): T | null {
    const item = localStorage.getItem(key);
    if (!item || item === 'undefined') {
      return null;
    }

    const deserializedItem = JSON.parse(item);
    return deserializedItem;
  }

  public save<T>(key: string, item: T): void {
    const serializedItem = JSON.stringify(item);
    localStorage.setItem(key, serializedItem);
  }
}
