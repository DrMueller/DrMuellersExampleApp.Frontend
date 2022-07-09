import { ColumnDefinitionsContainer } from '../models';

import { IColDefBuilderService } from '.';

export interface IColDefBuilderOrchestratorService<T> {
  withColumn(columnKey: string, descripion: string, className?: string): IColDefBuilderService<T>;
  build(): ColumnDefinitionsContainer;
}
