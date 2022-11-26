import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LoadingIndicationService } from '../../mat-ext/loading-indication';
import { slideInAnimation } from './app.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideInAnimation],
})
export class AppComponent {
  public constructor(private loadIndicator: LoadingIndicationService) {}

  public get isLoading$(): Observable<boolean> {
    return this.loadIndicator.isLoading$;
  }
}
