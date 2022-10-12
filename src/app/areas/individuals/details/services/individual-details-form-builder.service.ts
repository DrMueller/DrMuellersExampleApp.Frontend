import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { IndividualsServicesModule } from '../../individuals-services.module';

@Injectable({
  providedIn: IndividualsServicesModule
})
export class IndividualDetailsFormBuilderService {
  public constructor(
    private formBuilder: FormBuilder
  ) { }

  public buildFormGroup(): FormGroup {
    return this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(5)]],
      lastName: ['', [Validators.required]],
      birthdate: [new Date(1986, 12, 29)]
    });
  }
}
