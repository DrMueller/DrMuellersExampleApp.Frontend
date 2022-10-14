import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BusyIndicatorService {
  private _showBusyIndicator: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);

  public get showBusyIndicator$(): Observable<boolean> {
    return this._showBusyIndicator;
  }

  public toggleBusyIndicator(show: boolean): void {
    this.toggle(show);
    }

  public async withBusyIndicator<T>(callback: () => Promise<T>): Promise<T> {
    try {
      this.toggle(true);
      return await callback();
    } finally {
      this.toggle(false);
    }
  }

  private toggle(show: boolean): void {
    setTimeout(() => this._showBusyIndicator.next(show));
  }
}
