import { TestBed } from '@angular/core/testing';

import { FormListService } from './form-list.service';

describe('FormListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormListService = TestBed.get(FormListService);
    expect(service).toBeTruthy();
  });
});
