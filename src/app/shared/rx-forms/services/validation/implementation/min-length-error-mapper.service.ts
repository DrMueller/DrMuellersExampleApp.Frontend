import { Injectable } from '@angular/core';

import { ValidationErrorMappingResult } from '../../../models/validation-error-mapping-result.model';
import { ValidationError } from '../../../models/validation-error.model';
import { IValidationErrorMapperService } from '../validation-error-mapper-service.interface';

@Injectable({
  providedIn: 'root'
})
export class MinLengthErrorMapperService implements IValidationErrorMapperService {
  private readonly errorKey: string = 'minlength';

  public map(errorKey: string, _: any): ValidationErrorMappingResult {
    if (errorKey !== this.errorKey) {
      return ValidationErrorMappingResult.createNonSuccess();
    }

    return new ValidationErrorMappingResult(true, new ValidationError(this.errorKey, 'Minimum length'));
  }
}
