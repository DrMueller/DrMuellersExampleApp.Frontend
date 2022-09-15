import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, tap } from 'rxjs';
import { selectAppVersion } from '../../../common/state';
import { loadWelcomes } from '../../../common/state/actions/welcome.actions';
import { HomeState } from '../../../common/state/home.reducer';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit {
  constructor(private store: Store<HomeState>) {}

  ngOnInit(): void {
    this.store
      .select(selectAppVersion)
      .pipe(
        tap((appVersion) => (this.welcomeLoaded = appVersion !== undefined)),
        map(
          (appVersion) =>
            `Welcome from ASP.Net Core with the app version ${appVersion}`
        )
      )
      .subscribe((str) => {
        this.welcomeFromServer = str;
      });
  }

  public welcomeLoaded = false;
  public welcomeFromServer: string = '';

  public async loadFromServer(): Promise<void> {
    this.store.dispatch(loadWelcomes());
  }
}
