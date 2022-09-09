import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/shell/app-state';

import { LoginRequest } from '../../models';
import { LogInFormBuilderService } from '../../services';
import { logIn } from '../../state';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
})
export class LogInComponent implements OnInit {
  public formGroup!: FormGroup;
  public isLoggingIn = false;

  public constructor(
    private formBuilder: LogInFormBuilderService,
    private store: Store<IAppState>
  ) {}

  public get canLogIn(): boolean {
    return !this.formGroup.invalid && !this.isLoggingIn;
  }

  public logIn(): void {
    if (this.canLogIn) {
      this.isLoggingIn = true;
      const request = <LoginRequest>this.formGroup.value;

      this.store.dispatch(logIn({ data: request }));
    }
  }

  public ngOnInit(): void {
    this.formGroup = this.formBuilder.buildFormGroup();
  }
}
