import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruiterProfileSettingsComponent } from './recruiter-profile-settings.component';

describe('RecruiterProfileSettingsComponent', () => {
  let component: RecruiterProfileSettingsComponent;
  let fixture: ComponentFixture<RecruiterProfileSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecruiterProfileSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruiterProfileSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
