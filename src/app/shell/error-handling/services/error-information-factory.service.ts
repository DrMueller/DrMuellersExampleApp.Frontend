import { Injectable } from '@angular/core';

import { ErrorInformation } from '../models';
import { isDevMode } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ErrorInformationFactoryService {
  public createFromError(error: Error): ErrorInformation {
    let errorMessage = error.message || 'Unknown';
    if (isDevMode()) {
      errorMessage = errorMessage + ' ' + error.stack;
    }

    const result = new ErrorInformation(error.name, errorMessage);
    return result;
  }
}
