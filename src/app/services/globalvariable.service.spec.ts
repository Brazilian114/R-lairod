import { TestBed } from '@angular/core/testing';

import { GlobalvariableService } from './globalvariable.service';

describe('GlobalvariableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GlobalvariableService = TestBed.get(GlobalvariableService);
    expect(service).toBeTruthy();
  });
});
