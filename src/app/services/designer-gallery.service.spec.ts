import { TestBed } from '@angular/core/testing';

import { DesignerGalleryService } from './designer-gallery.service';

describe('DesignerGalleryService', () => {
  let service: DesignerGalleryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DesignerGalleryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
