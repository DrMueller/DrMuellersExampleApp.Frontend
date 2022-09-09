import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getPictureUrl, loadUserPicture, PicturesState } from '../common/state';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit {
  constructor(private store: Store<PicturesState>) {}

  public get pictureUrl$(): Observable<string> {
    return this.store.select(getPictureUrl);
  }

  public ngOnInit(): void {
    this.store.dispatch(loadUserPicture());
  }
}
