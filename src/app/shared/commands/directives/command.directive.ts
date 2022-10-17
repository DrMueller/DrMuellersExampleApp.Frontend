import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
  DoCheck,
} from '@angular/core';
import { Command } from '../models/command';

@Directive({
  selector: '[appCommand]',
})
export class CommandDirective implements DoCheck {
  private _command!: Command;

  public constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef
  ) {}

  @HostListener('click') public onClick() {
    this._command.execute();
  }

  @Input() public set appCommand(command: Command) {
    this._command = command;
    this.adjustDisabledOnElement();
  }

  public ngDoCheck(): void {
    this.adjustDisabledOnElement();
  }

  private adjustDisabledOnElement() {
    const attributes: NamedNodeMap = this.elementRef.nativeElement.attributes;
    const disabledAttribute = attributes.getNamedItem('disabled');

    if (!this._command.canExecute && !disabledAttribute) {
      this.renderer.setAttribute(this.elementRef.nativeElement, 'disabled', '');
    } else if (this._command.canExecute && disabledAttribute) {
      this.renderer.removeAttribute(this.elementRef.nativeElement, 'disabled');
    }
  }
}
