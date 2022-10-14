import { ColumnDefinitionBase } from './column-definition-base.model';

export class BindingColumnDefinition extends ColumnDefinitionBase {
  public constructor(
    columnKey: string,
    headerDescription: string,
    propertyKey: string,
    className: string = ''
  ) {
    super(columnKey, headerDescription, className, propertyKey, null);
  }
}
