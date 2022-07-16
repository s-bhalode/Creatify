import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruiterPost2Component } from './recruiter-post2.component';

describe('RecruiterPost2Component', () => {
  let component: RecruiterPost2Component;
  let fixture: ComponentFixture<RecruiterPost2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecruiterPost2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruiterPost2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
