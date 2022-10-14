import { ColumnDefinitionsContainer } from "../../../shared/mat-ext/tables/models";
import { ColDefBuilderFactoryService } from "../../../shared/mat-ext/tables/services";
import { IndividualOverviewEntryVm } from "../common/view-models";

export function buildColumns(factory: ColDefBuilderFactoryService): ColumnDefinitionsContainer {
  return factory
  .startBuilding<IndividualOverviewEntryVm>()
  .withColumn('firstName', 'First Name').bindingTo('firstName')
  .withColumn('lastName', 'First Name').bindingTo('lastName')
  .withColumn('birthdate', 'Birthdate').bindingTo('birthdate')
  .build();
};
