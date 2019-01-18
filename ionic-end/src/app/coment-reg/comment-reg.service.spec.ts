import { TestBed } from '@angular/core/testing';

import { CommentRegService } from './comment-reg.service';

describe('CommentRegService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommentRegService = TestBed.get(CommentRegService);
    expect(service).toBeTruthy();
  });
});
