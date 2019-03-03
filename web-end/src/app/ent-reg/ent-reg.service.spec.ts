import { TestBed } from '@angular/core/testing';

import { EntRegService } from './ent-reg.service';

describe('EntRegService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EntRegService = TestBed.get(EntRegService);
    expect(service).toBeTruthy();
  });
});
