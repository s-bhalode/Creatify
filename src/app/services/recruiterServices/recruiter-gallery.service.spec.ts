import { TestBed } from '@angular/core/testing';

import { RecruiterGalleryService } from './recruiter-gallery.service';

describe('RecruiterGalleryService', () => {
  let service: RecruiterGalleryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecruiterGalleryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
