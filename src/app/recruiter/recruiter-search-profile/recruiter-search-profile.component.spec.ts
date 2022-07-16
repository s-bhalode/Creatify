import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruiterSearchProfileComponent } from './recruiter-search-profile.component';

describe('RecruiterSearchProfileComponent', () => {
  let component: RecruiterSearchProfileComponent;
  let fixture: ComponentFixture<RecruiterSearchProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecruiterSearchProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruiterSearchProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
