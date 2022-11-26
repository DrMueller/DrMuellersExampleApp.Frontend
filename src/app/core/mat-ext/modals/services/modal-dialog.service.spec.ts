import { TestBed } from '@angular/core/testing';

import { ModalDialogService } from './modal-dialog.service';
import { MatDialog } from '@angular/material';

describe('ModalDialogService', () => {
  const dialogSpy: any = {};
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [
        {
          provide: MatDialog,
          useValue: dialogSpy,
        },
      ],
    })
  );

  it('should be created', () => {
    const service: ModalDialogService = TestBed.get(ModalDialogService);
    expect(service).toBeTruthy();
  });
});
