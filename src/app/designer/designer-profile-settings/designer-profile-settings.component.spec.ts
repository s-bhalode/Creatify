import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignerProfileSettingsComponent } from './designer-profile-settings.component';

describe('DesignerProfileSettingsComponent', () => {
  let component: DesignerProfileSettingsComponent;
  let fixture: ComponentFixture<DesignerProfileSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignerProfileSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignerProfileSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
