import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material';

import { IndividualsNavigationService } from '../../../common/services';
import { IndividualOverviewEntryDto } from '../../../common/dtos';
import { IndividualColDefBuilderService, IndividualsOverviewDataService } from '../../services';

import { IndividualsOverviewComponent } from './individuals-overview.component';

describe('IndividualsOverviewComponent', () => {
  let component: IndividualsOverviewComponent;
  let fixture: ComponentFixture<IndividualsOverviewComponent>;

  const colDefBuilderServiceMock = jasmine.createSpyObj<IndividualColDefBuilderService>(['buildDefinitions']);
  const dataServiceMock = jasmine.createSpyObj<IndividualsOverviewDataService>(['loadAllAsync']);
  dataServiceMock.loadAllAsync.and.returnValue(Promise.resolve<IndividualOverviewEntryDto[]>([]));

  const navigationServiceMock = jasmine.createSpyObj<IndividualsNavigationService>(['navigateToCreateIndividual']);
  const matSnackbarMock = jasmine.createSpyObj<MatSnackBar>(['open']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IndividualsOverviewComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        {
          provide: IndividualColDefBuilderService,
          useValue: colDefBuilderServiceMock
        },
        {
          provide: IndividualsOverviewDataService,
          useValue: dataServiceMock
        },
        {
          provide: IndividualsNavigationService,
          useValue: navigationServiceMock
        },
        {
          provide: MatSnackBar,
          useValue: matSnackbarMock
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
