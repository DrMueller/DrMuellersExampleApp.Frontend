import { Component, OnInit, ViewChild } from '@angular/core';

import { IndividualsNavigationService } from '../../../common/services';
import { IndividualOverviewEntryDto } from '../../../common/dtos';
import { IndividualColDefBuilderService } from '../../services';
import { MatTableComponent } from '../../../../../shared/tables/components/mat-table';
import { ColumnDefinitionsContainer } from '../../../../../shared/tables/models';
import { RelayCommand } from '../../../../../shared/commands/models/relay-command';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Component({
  selector: 'app-individuals-overview',
  templateUrl: './individuals-overview.component.html',
  styleUrls: ['./individuals-overview.component.scss']
})
export class IndividualsOverviewComponent implements OnInit {

  public editIndividualCommand!: RelayCommand;
  @ViewChild(MatTableComponent) public table!: MatTableComponent<IndividualOverviewEntryDto>;
  public columnDefinitions!: ColumnDefinitionsContainer;
  public createIndividualCommand!: RelayCommand;
  public deleteIndividualCommand!: RelayCommand;
  public individuals: IndividualOverviewEntryDto[] = [];
  public selectedIndividuals: IndividualOverviewEntryDto[] = [];

  public constructor(
    private individualColDefBuilder: IndividualColDefBuilderService,
    private navigationService: IndividualsNavigationService,
    private snackBar: MatSnackBar) {
  }

  public createIndividual(): void {
    this.navigationService.navigateToCreateIndividual();
  }

  public ngOnInit(): void {
    this.columnDefinitions = this.individualColDefBuilder.buildDefinitions();

    this.deleteIndividualCommand = new RelayCommand(() => this.deleteIndividualAsync(), () => this.areIndividualsSelected);
    this.editIndividualCommand = new RelayCommand(() => this.editIndividual(), () => this.areIndividualsSelected);
    this.createIndividualCommand = new RelayCommand(() => this.navigationService.navigateToCreateIndividual(), () => true);

    setTimeout(() => {
      this.snackBar.open('Loading Individuals..', undefined, <MatSnackBarConfig<any>>{
        duration: 2500
      });
    });

  }

  public rowSelectionChanged(selectedItems: IndividualOverviewEntryDto[]): void {
    this.selectedIndividuals = selectedItems;
  }

  private async deleteIndividualAsync(): Promise<void> {
  }

  private editIndividual(): void {
    const selectedIndividualId = this.selectedIndividuals[0].id;
    this.navigationService.navigateToEditIndividual(selectedIndividualId);
  }

  private get areIndividualsSelected(): boolean {
    return this.selectedIndividuals && this.selectedIndividuals.length > 0;
  }
}
