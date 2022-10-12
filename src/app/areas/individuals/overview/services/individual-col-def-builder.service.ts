import { Injectable } from '@angular/core';


import { IndividualsServicesModule } from '../../individuals-services.module';
import { IndividualOverviewEntryDto } from '../../common/dtos';
import { ColDefBuilderFactoryService } from '../../../../shared/tables/services';
import { ColumnDefinitionsContainer } from '../../../../shared/tables/models';

@Injectable({
  providedIn: IndividualsServicesModule
})
export class IndividualColDefBuilderService {
  public constructor(private builderFactory: ColDefBuilderFactoryService) { }

  public buildDefinitions(): ColumnDefinitionsContainer {
    return this.builderFactory
      .startBuilding<IndividualOverviewEntryDto>()
      .withColumn('firstName', 'First Name').bindingTo('firstName')
      .withColumn('lastName', 'First Name').bindingTo('lastName')
      .withColumn('birthdate', 'First Name').bindingTo('birthdate')
      .build();
  }
}
