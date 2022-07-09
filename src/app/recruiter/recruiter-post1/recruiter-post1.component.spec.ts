import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruiterPost1Component } from './recruiter-post1.component';

describe('RecruiterPost1Component', () => {
  let component: RecruiterPost1Component;
  let fixture: ComponentFixture<RecruiterPost1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecruiterPost1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruiterPost1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
