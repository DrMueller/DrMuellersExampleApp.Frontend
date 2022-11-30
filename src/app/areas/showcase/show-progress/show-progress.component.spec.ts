import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowProgressComponent } from './show-progress.component';

describe('ShowProgressComponent', () => {
  let component: ShowProgressComponent;
  let fixture: ComponentFixture<ShowProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowProgressComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(ShowProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
