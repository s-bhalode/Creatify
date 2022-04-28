import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruiterActivityComponent } from './recruiter-activity.component';

describe('RecruiterActivityComponent', () => {
  let component: RecruiterActivityComponent;
  let fixture: ComponentFixture<RecruiterActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecruiterActivityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruiterActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
