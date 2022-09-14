import { Component } from '@angular/core';
import { User } from '@microsoft/microsoft-graph-types';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadCurrentUser } from '../common/state/actions/current-user.actions';
import { GraphState } from '../common/state/graph.reducer';
import { selectCurrentUser } from '../common/state/graph.selectors';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent {
  constructor(private store: Store<GraphState>) {}

  public get formattedUser$(): Observable<User | undefined> {
    return this.store.select(selectCurrentUser);
  }

  public loadGraphUser(): void {
    this.store.dispatch(loadCurrentUser());
  }
}
