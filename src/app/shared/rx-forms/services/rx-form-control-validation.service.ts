import { Inject, Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

import { ValidationError } from '../models';

import { VALIDATION_ERROR_MAPPER_TOKEN } from './validation/constants';
import { IValidationErrorMapperService } from './validation/validation-error-mapper-service.interface';

@Injectable({
  providedIn: 'root',
})
export class RxFormControlValidationService {
  public constructor(
    @Inject(VALIDATION_ERROR_MAPPER_TOKEN)
    private validationErrorMappers: IValidationErrorMapperService[]
  ) {}

  public checkIfFormControlIsValid(formControl: AbstractControl): boolean {
    return (!formControl.touched && !formControl.dirty) || formControl.valid;
  }

  public validateFormControl(formControl: AbstractControl): ValidationError[] {
    if (this.checkIfFormControlIsValid(formControl)) {
      return [];
    }

    const result: ValidationError[] = [];
    const errorKeys = Object.keys(formControl.errors!);
    errorKeys.forEach((errorKey) => {
      const errorMappings = this.validationErrorMappers
        .map((mapper) => mapper.map(errorKey, formControl.errors![errorKey]))
        .filter((mappingResult) => mappingResult.isSuccess);

      if (errorMappings.length > 0) {
        result.push(errorMappings[0].validationError!);
      } else {
        // Fallback, if Mappers are missing
        result.push(new ValidationError(errorKey, errorKey));
      }
    });

    return result;
  }
}
