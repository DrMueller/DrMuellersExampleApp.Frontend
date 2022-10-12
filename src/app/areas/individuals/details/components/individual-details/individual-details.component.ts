import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RelayCommand } from '../../../../../shared/commands/models/relay-command';

import { IndividualsNavigationService } from '../../../common/services';
import { IndividualDetailsDto } from '../../dtos';
import { IndividualDetailsFormBuilderService } from '../../services';

@Component({
  selector: 'app-individual-details',
  templateUrl: './individual-details.component.html',
  styleUrls: ['./individual-details.component.scss']
})
export class IndividualDetailsComponent implements OnInit {

  public individualFormGroup!: FormGroup;
  public cancelCommand!: RelayCommand;
  public individual!: IndividualDetailsDto;
  public saveIndividualCommand!: RelayCommand;

  public constructor(
    private route: ActivatedRoute,
    private builder: IndividualDetailsFormBuilderService,
    private navigationService: IndividualsNavigationService,
    private changeDetector: ChangeDetectorRef) { }

  public get title(): string {
    if (this.individual.individualId) {
      return 'Edit Individual';
    }

    return 'New Individual';
  }

  public ngOnInit() {
    this.individualFormGroup = this.builder.buildFormGroup();
    this.saveIndividualCommand = new RelayCommand(
      async () => await this.saveIndividualAsync(),
      () => this.individualFormGroup.dirty && this.individualFormGroup.valid);

    this.cancelCommand = new RelayCommand(
      () => this.navigationService.navigateToOverview(),
      () => true);

    this.route.data.subscribe(data => {
      this.individual = <IndividualDetailsDto>data['individual'];
      this.individualFormGroup.patchValue(this.individual);
    });

    this.changeDetector.detectChanges();
  }

  private async saveIndividualAsync(): Promise<void> {
    this.individual = <IndividualDetailsDto>{
      ...this.individual,
      ...<IndividualDetailsDto>this.individualFormGroup.value
    };


    // TODO Save Command
    // await this.dataService.saveAsync(this.individual);

    this.navigationService.navigateToOverview();
  }
}

