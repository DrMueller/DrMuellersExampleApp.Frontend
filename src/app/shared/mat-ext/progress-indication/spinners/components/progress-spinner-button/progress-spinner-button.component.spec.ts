import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { ProgressSpinnerButtonComponent } from './progress-spinner-button.component';

describe('ProgressSpinnerButtonComponent', () => {
  let component: ProgressSpinnerButtonComponent;
  let fixture: ComponentFixture<ProgressSpinnerButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProgressSpinnerButtonComponent],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [NoopAnimationsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressSpinnerButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
