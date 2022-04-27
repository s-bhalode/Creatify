import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruiterNetworkComponent } from './recruiter-network.component';

describe('RecruiterNetworkComponent', () => {
  let component: RecruiterNetworkComponent;
  let fixture: ComponentFixture<RecruiterNetworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecruiterNetworkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruiterNetworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
