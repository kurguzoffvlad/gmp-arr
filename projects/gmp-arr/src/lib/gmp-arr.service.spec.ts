import { TestBed } from '@angular/core/testing';

import { GmpArrService } from './gmp-arr.service';

describe('GmpArrService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GmpArrService = TestBed.get(GmpArrService);
    expect(service).toBeTruthy();
  });
});
