import { TestBed } from '@angular/core/testing';

import { ExtViewService } from './ext-view.service';

describe('ExtViewService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExtViewService = TestBed.get(ExtViewService);
    expect(service).toBeTruthy();
  });
});
