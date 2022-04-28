import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignerActivityComponent } from './designer-activity.component';

describe('DesignerActivityComponent', () => {
  let component: DesignerActivityComponent;
  let fixture: ComponentFixture<DesignerActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignerActivityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignerActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
