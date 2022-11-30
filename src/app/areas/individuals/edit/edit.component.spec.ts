import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { Individual } from '../common/models';
import { IndividualsNavigationService } from '../common/services';
import { State } from '../common/state/individuals.reducer';

import { EditComponent } from './edit.component';
import { FormBuilderService } from './form-builder.service';

describe('EditComponent', () => {
  let component: EditComponent;
  let fixture: ComponentFixture<EditComponent>;
  let navMock: Partial<IndividualsNavigationService>;
  let formBuilderMock: Partial<FormBuilderService>;
  let storeMock: Partial<Store<State>>;

  beforeEach(async () => {
    navMock = {};

    formBuilderMock = {
      buildFormGroup: jest.fn(),
    };

    storeMock = {
      select: jest.fn().mockReturnValue(of<Individual | undefined>()),
    };

    await TestBed.configureTestingModule({
      declarations: [EditComponent],
      providers: [
        {
          provide: IndividualsNavigationService,
          useValue: navMock,
        },
        {
          provide: FormBuilderService,
          useValue: formBuilderMock,
        },
        {
          provide: Store<State>,
          useValue: storeMock,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(EditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
