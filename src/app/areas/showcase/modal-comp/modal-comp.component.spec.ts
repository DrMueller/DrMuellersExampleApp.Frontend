import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ModalCompComponent } from './modal-comp.component';

describe('ModalCompComponent', () => {
  let component: ModalCompComponent;
  let fixture: ComponentFixture<ModalCompComponent>;
  let dialogMock: Partial<MatDialogRef<ModalCompComponent>>;

  beforeEach(async () => {
    dialogMock = {};

    await TestBed.configureTestingModule({
      declarations: [ModalCompComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        {
          provide: MatDialogRef<ModalCompComponent>,
          useValue: dialogMock as MatDialogRef<ModalCompComponent>,
        },
        {
          provide: MAT_DIALOG_DATA,
          useValue: 'test',
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ModalCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
