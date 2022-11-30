import { TestBed } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';

import { SnackBarService } from './snack-bar.service';

describe('SnackBarService', () => {
  const snackbackMock: any = {};

  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [{ provide: MatSnackBar, useValue: snackbackMock }],
    })
  );

  it('should be created', () => {
    const service: SnackBarService = TestBed.get(SnackBarService);
    expect(service).toBeTruthy();
  });
});
