import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-progress-spinner',
  templateUrl: './progress-spinner.component.html',
  styleUrls: ['./progress-spinner.component.scss'],
})
export class ProgressSpinnerComponent {
  @Input() public showProgressSpinner$: Observable<boolean> =
    new Observable<boolean>();
}
