import { animate, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, Output } from '@angular/core';

const inactiveStyle = style({
  opacity: 0,
});

const timing = '500ms ease';

@Component({
  selector: 'drm-progress-spinner-button',
  templateUrl: './progress-spinner-button.component.html',
  styleUrls: ['./progress-spinner-button.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition('void => *', [
        inactiveStyle,
        animate(timing)
      ]),
      transition('* => void', [
        animate(timing, inactiveStyle)
      ])
    ])
  ]
})

export class ProgressSpinnerButtonComponent {
  @Input() public showProgressSpinner: boolean;
  @Output() public buttonClick = new EventEmitter<void>();

  public internalClick(): void {
    this.buttonClick.emit();
  }
}
