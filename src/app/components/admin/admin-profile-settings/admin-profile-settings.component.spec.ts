import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProfileSettingsComponent } from './admin-profile-settings.component';

describe('AdminProfileSettingsComponent', () => {
  let component: AdminProfileSettingsComponent;
  let fixture: ComponentFixture<AdminProfileSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminProfileSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProfileSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
