import { TestBed } from '@angular/core/testing';

import { DoctoradminService } from './doctoradmin.service';

describe('DoctoradminService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DoctoradminService = TestBed.get(DoctoradminService);
    expect(service).toBeTruthy();
  });
});
