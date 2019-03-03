import { TestBed } from '@angular/core/testing';

import { ExtListService } from './ext-list.service';

describe('ExtListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExtListService = TestBed.get(ExtListService);
    expect(service).toBeTruthy();
  });
});
