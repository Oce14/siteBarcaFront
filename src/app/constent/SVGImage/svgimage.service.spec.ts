import { TestBed } from '@angular/core/testing';

import { SVGImageService } from './svgimage.service';

describe('SVGImageService', () => {
  let service: SVGImageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SVGImageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
