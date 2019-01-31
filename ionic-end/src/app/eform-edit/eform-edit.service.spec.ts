import { TestBed } from '@angular/core/testing';

import { EFormEditService } from './eform-edit.service';

describe('EFormEditService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EFormEditService = TestBed.get(EFormEditService);
    expect(service).toBeTruthy();
  });
});
