import { TestBed } from '@angular/core/testing';

import { EntListService } from './ent-list.service';

describe('EntListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EntListService = TestBed.get(EntListService);
    expect(service).toBeTruthy();
  });
});
