import { TestBed } from '@angular/core/testing';

import { EFormRegisterService } from './e-form-register.service';

describe('EFormRegisterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EFormRegisterService = TestBed.get(EFormRegisterService);
    expect(service).toBeTruthy();
  });
});
