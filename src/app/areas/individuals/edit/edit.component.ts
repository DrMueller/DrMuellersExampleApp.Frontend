import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { filter, Subject, takeUntil, tap } from 'rxjs';
import { IndividualsNavigationService } from '../common/services';
import { FormBuilderService } from './form-builder.service';
import * as fromIndividuals from './../common/state/individuals.reducer';
import { Individual } from '../common/models';
import { RelayCommand } from '../../../shared/commands/models/relay-command';
import { selectCurrentIndividual } from '../common/state/individuals.selectors';
import { UpsertIndividual } from '../common/state/actions/upsert-individual.actions';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit, OnDestroy {
  private _individual: Individual | undefined;
  public formGroup!: FormGroup;
  private unsubscribe = new Subject<void>();

  public saveCommand = new RelayCommand(
    () => this.save(),
    () => this.formGroup.valid
  );
  public cancelCommand = new RelayCommand(() => this.nav.ToOverview());

  public get title(): string {
    if (this._individual) {
      return `Edit individual - ${this._individual.id}`;
    }

    return 'New individual';
  }

  public ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  constructor(
    private readonly nav: IndividualsNavigationService,
    private readonly formBuilder: FormBuilderService,
    private store: Store<fromIndividuals.State>
  ) {}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.buildFormGroup();

    this.store
      .select(selectCurrentIndividual)
      .pipe(
        takeUntil(this.unsubscribe),
        tap((ind) => (this._individual = ind)),
        filter((ind) => !!ind),
        tap((ind) => this.formGroup.patchValue(ind!))
      )
      .subscribe();
  }

  private save(): void {
    const ind = this._individual ?? <Individual>{};
    const newInd = { ...ind, ...this.formGroup.value };

    this.store.dispatch(
      UpsertIndividual({
        data: newInd,
      })
    );

    this.nav.ToOverview();
  }
}
