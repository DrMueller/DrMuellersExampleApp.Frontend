import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { RelayCommand } from '../../../shared/commands/models/relay-command';
import { ColumnDefinitionsContainer } from '../../../shared/mat-ext/tables/models';
import { ColDefBuilderFactoryService } from '../../../shared/mat-ext/tables/services';
import { IndividualsNavigationService } from '../common/services';
import { LoadIndividuals } from '../common/state/actions/load-individuals.actions';
import { State } from '../common/state/individuals.reducer';
import { selectIndividualsOverview } from '../common/state/individuals.selectors';
import { IndividualOverviewEntryVm } from '../common/view-models';
import { buildColumns } from './table.builder';

@Component({
  selector: 'app-individuals-overview',
  templateUrl: './individuals-overview.component.html',
  styleUrls: ['./individuals-overview.component.scss']
})
export class IndividualsOverviewComponent implements OnInit {

  public editIndividualCommand!: RelayCommand;
  public columnDefinitions!: ColumnDefinitionsContainer;
  public createIndividualCommand!: RelayCommand;
  public deleteIndividualCommand!: RelayCommand;
  public selectedIndividuals: IndividualOverviewEntryVm[] = [];

  public individuals: IndividualOverviewEntryVm[] = [];

  public constructor(
    private tableFactory: ColDefBuilderFactoryService,
    private navigationService: IndividualsNavigationService,
    private store: Store<State>,
    private snackBar: MatSnackBar
     ) {
  }

  public ngOnInit(): void {
    this.store.select(selectIndividualsOverview)
    .subscribe(individuals => {
      this.individuals = individuals;
    });

    this.columnDefinitions = buildColumns(this.tableFactory);
    this.deleteIndividualCommand = new RelayCommand(() => this.deleteIndividualAsync(), () => this.areIndividualsSelected);
    this.editIndividualCommand = new RelayCommand(() => this.editIndividual(), () => this.areIndividualsSelected);
    this.createIndividualCommand = new RelayCommand(() => this.navigationService.toCreate());
    this.store.dispatch(LoadIndividuals());

    setTimeout(() => {
      this.snackBar.open('Loading Individuals..', undefined, <MatSnackBarConfig<any>>{
        duration: 2500
      });
    });
  }

  public rowSelectionChanged(selectedItems: IndividualOverviewEntryVm[]): void {
    this.selectedIndividuals = selectedItems;
  }

  private async deleteIndividualAsync(): Promise<void> {
  }

  private editIndividual(): void {
    const selectedIndividualId = this.selectedIndividuals[0].id;
    this.navigationService.toEdit(selectedIndividualId);
  }

  private get areIndividualsSelected(): boolean {
    return this.selectedIndividuals && this.selectedIndividuals.length > 0;
  }
}
