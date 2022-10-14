import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { selectAppVersion, selectAppVersionLoaded } from '../../../common/state';
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
    this.welcomeFromServer$ = this.store
      .select(selectAppVersion)
      .pipe(
        map(
          (appVersion) =>
            `Welcome from ASP.Net Core with the app version ${appVersion}`
        )
      );

      this.appVersionLoded$ = this.store.select(selectAppVersionLoaded);
  }

  public appVersionLoded$!: Observable<boolean>;
  public welcomeFromServer$!: Observable<string>;

  public async loadFromServer(): Promise<void> {
    this.store.dispatch(loadWelcomes());
  }
}
