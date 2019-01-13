import { TestBed } from '@angular/core/testing';

import { AdminRegService } from './admin-reg.service';

describe('AdminRegService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminRegService = TestBed.get(AdminRegService);
    expect(service).toBeTruthy();
  });
});
