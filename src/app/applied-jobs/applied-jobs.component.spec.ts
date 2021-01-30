import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AppliedJobsComponent } from './applied-jobs.component';

describe('AppliedJobsComponent', () => {
  let component: AppliedJobsComponent;
  let fixture: ComponentFixture<AppliedJobsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AppliedJobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppliedJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
