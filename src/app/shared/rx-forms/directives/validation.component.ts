import { AfterViewInit, Component, Injector } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { MatFormField } from '@angular/material/form-field';

import { RxFormControlValidationService } from '../services';

// See: https://stackoverflow.com/questions/58509523/dynamically-create-a-mat-error-component-and-have-it-be-projected-into-the-par
@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: '[appValidation]',
  template: '{{ error }}',
})
export class ValidationComponent implements AfterViewInit {
  private _formControlToValidate!: AbstractControl;
  public error = '';

  public constructor(
    private injector: Injector,
    private validator: RxFormControlValidationService
  ) {}

  public ngAfterViewInit() {
    const container = this.injector.get(MatFormField);
    this._formControlToValidate = container._control.ngControl!.control!;
    this._formControlToValidate.statusChanges.subscribe((val) =>
      this.validate(val)
    );
  }

  private validate(validity: string): void {
    if (validity === 'VALID') {
      return;
    }

    const validationErrors = this.validator.validateFormControl(
      this._formControlToValidate
    );

    // This case happens, if f.e. the pre-loaded data is invalid
    if (validationErrors.length == 0) {
      return;
    }

    this.error = validationErrors[0].errorMessage;
  }
}
