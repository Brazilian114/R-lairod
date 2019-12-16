import { TestBed } from '@angular/core/testing';

import { MasterserviceService } from './masterservice.service';

describe('MasterserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MasterserviceService = TestBed.get(MasterserviceService);
    expect(service).toBeTruthy();
  });
});
