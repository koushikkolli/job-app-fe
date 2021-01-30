import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { JobViewComponent } from './job-view.component';

describe('JobViewComponent', () => {
  let component: JobViewComponent;
  let fixture: ComponentFixture<JobViewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ JobViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
