import { TestBed } from '@angular/core/testing';

import { ReprtsService } from './reprts.service';

describe('ReprtsService', () => {
  let service: ReprtsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReprtsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
