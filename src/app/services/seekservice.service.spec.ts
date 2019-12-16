import { TestBed } from '@angular/core/testing';

import { SeekserviceService } from './seekservice.service';

describe('SeekserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SeekserviceService = TestBed.get(SeekserviceService);
    expect(service).toBeTruthy();
  });
});
