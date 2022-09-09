import { Component } from '@angular/core';
import type { Observable } from 'rxjs';
import { BusyIndicatorService } from 'src/app/core/loading-indication/services';
import { slideInAnimation } from './app.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideInAnimation],
})
export class AppComponent {
  public constructor(private busyIndicator: BusyIndicatorService) {}

  public get showLoadingIndicator$(): Observable<boolean> {
    return this.busyIndicator.showBusyIndicator$;
  }
}
