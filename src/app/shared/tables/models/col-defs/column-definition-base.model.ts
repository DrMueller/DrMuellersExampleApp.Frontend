import { TemplateRef } from "@angular/core";

export abstract class ColumnDefinitionBase {
  constructor(
    public readonly columnKey: string,
    public readonly headerDescription: string,
    public readonly className: string,
    public readonly propertyKey: string | null,
    public template: TemplateRef<any> | null
  ) { }
}
