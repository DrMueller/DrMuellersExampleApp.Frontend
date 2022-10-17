import { Component } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Command } from '../../../shared/commands/models/command';
import { RelayCommand } from '../../../shared/commands/models/relay-command';

@Component({
  selector: 'app-show-progress',
  templateUrl: './show-progress.component.html',
  styleUrls: ['./show-progress.component.scss'],
})
export class ShowProgressComponent {
  private _showProgressSpinner: boolean = false;
  public toggleProgressSpinner: Command = new RelayCommand(() =>
    this.toggleProgress()
  );
  private _showProgressSpinner$: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);

  public get showProgressSpinner$(): Observable<boolean> {
    return this._showProgressSpinner$;
  }

  constructor() {}

  private toggleProgress(): void {
    this._showProgressSpinner = !this._showProgressSpinner;
    this._showProgressSpinner$.next(this._showProgressSpinner);
  }
}
