import { TestBed } from '@angular/core/testing';

import { DesignerAuthGuard } from './designer-auth.guard';

describe('DesignerAuthGuard', () => {
  let guard: DesignerAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DesignerAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
