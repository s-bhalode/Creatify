import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignerSearchProfileComponent } from './designer-search-profile.component';

describe('DesignerSearchProfileComponent', () => {
  let component: DesignerSearchProfileComponent;
  let fixture: ComponentFixture<DesignerSearchProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignerSearchProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignerSearchProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
