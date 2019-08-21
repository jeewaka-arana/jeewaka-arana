import { TestBed } from '@angular/core/testing';

import { SearchdoctorService } from './searchdoctor.service';

describe('SearchdoctorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchdoctorService = TestBed.get(SearchdoctorService);
    expect(service).toBeTruthy();
  });
});
