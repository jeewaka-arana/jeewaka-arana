import { TestBed } from '@angular/core/testing';

import { AppStep1Service } from './app-step1.service';

describe('AppStep1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppStep1Service = TestBed.get(AppStep1Service);
    expect(service).toBeTruthy();
  });
});
