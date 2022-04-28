import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignerNetworkComponent } from './designer-network.component';

describe('DesignerNetworkComponent', () => {
  let component: DesignerNetworkComponent;
  let fixture: ComponentFixture<DesignerNetworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignerNetworkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignerNetworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
