import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignerPostComponent } from './designer-post.component';

describe('DesignerPostComponent', () => {
  let component: DesignerPostComponent;
  let fixture: ComponentFixture<DesignerPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignerPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignerPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
