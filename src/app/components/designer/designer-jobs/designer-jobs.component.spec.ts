import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignerJobsComponent } from './designer-jobs.component';

describe('DesignerJobsComponent', () => {
  let component: DesignerJobsComponent;
  let fixture: ComponentFixture<DesignerJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignerJobsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignerJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
