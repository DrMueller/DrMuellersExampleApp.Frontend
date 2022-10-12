import { ChangeDetectorRef, NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Data } from '@angular/router';
import { RxFormModelBindingService } from '@drmueller/ng-rx-forms2';
import { of } from 'rxjs';

import { IndividualsNavigationService } from '../../../common/services';
import { IndividualDetailsDataService, IndividualDetailsFormBuilderService } from '../../services';

import { IndividualDetailsComponent } from './individual-details.component';

describe('IndividualDetailsComponent', () => {
  let component: IndividualDetailsComponent;
  let fixture: ComponentFixture<IndividualDetailsComponent>;

  const activateRouteMock = {
    data: of<Data>()
  };

  const builderMock = jasmine.createSpyObj<IndividualDetailsFormBuilderService>(['buildFormGroup']);
  const binderMock = jasmine.createSpyObj<RxFormModelBindingService>(['bindModelToFormGroup']);
  const dataServiceMock = jasmine.createSpyObj<IndividualDetailsDataService>(['dataService']);
  const navigationServiceMock = jasmine.createSpyObj<IndividualsNavigationService>(['navigateToOverview']);
  const changeDetectorMock = jasmine.createSpyObj<ChangeDetectorRef>(['detectChanges']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IndividualDetailsComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: activateRouteMock
        },
        {
          provide: IndividualDetailsFormBuilderService,
          useValue: builderMock
        },
        {
          provide: RxFormModelBindingService,
          useValue: binderMock
        },
        {
          provide: IndividualDetailsDataService,
          useValue: dataServiceMock
        },
        {
          provide: IndividualsNavigationService,
          useValue: navigationServiceMock
        },
        {
          provide: ChangeDetectorRef,
          useValue: changeDetectorMock
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
