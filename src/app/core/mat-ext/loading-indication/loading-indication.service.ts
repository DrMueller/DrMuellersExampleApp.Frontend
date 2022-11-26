import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingIndicationService {
  private _isLoadingIndicator: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);

  public get isLoading$(): Observable<boolean> {
    return this._isLoadingIndicator;
  }

  public toggleLoading(isLoading: boolean): void {
    this.toggle(isLoading);
  }

  public async withLoadingIndicator<T>(callback: () => Promise<T>): Promise<T> {
    try {
      this.toggle(true);
      return await callback();
    } finally {
      this.toggle(false);
    }
  }

  private toggle(show: boolean): void {
    setTimeout(() => this._isLoadingIndicator.next(show));
  }
}
