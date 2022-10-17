import { animate, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';

const inactiveStyle = style({
  opacity: 0,
});

const timing = '500ms ease';

@Component({
  selector: 'app-progress-spinner-button',
  templateUrl: './progress-spinner-button.component.html',
  styleUrls: ['./progress-spinner-button.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition('void => *', [inactiveStyle, animate(timing)]),
      transition('* => void', [animate(timing, inactiveStyle)]),
    ]),
  ],
})
export class ProgressSpinnerButtonComponent {
  @Input() public showProgressSpinner$: Observable<boolean> =
    new Observable<boolean>();
  @Output() public buttonClicked = new EventEmitter<void>();

  public internalClick(): void {
    this.buttonClicked.emit();
  }
}
