import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalDialogService } from '../../../core/mat-ext/modals';
import { ShowModalComponent } from './show-modal.component';

describe('ShowModalComponent', () => {
  let component: ShowModalComponent;
  let fixture: ComponentFixture<ShowModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowModalComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        {
          provide: ModalDialogService,
          useValue: {},
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ShowModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
