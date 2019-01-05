import { TestBed } from '@angular/core/testing';

import { ExtinguisherService } from './extinguisher.service';

describe('ExtinguisherService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExtinguisherService = TestBed.get(ExtinguisherService);
    expect(service).toBeTruthy();
  });
});
