import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruiterPostComponent } from './recruiter-post.component';

describe('RecruiterPostComponent', () => {
  let component: RecruiterPostComponent;
  let fixture: ComponentFixture<RecruiterPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecruiterPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruiterPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
