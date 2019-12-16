import { TestBed } from '@angular/core/testing';

import { NotiserviceService } from './notiservice.service';

describe('NotiserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NotiserviceService = TestBed.get(NotiserviceService);
    expect(service).toBeTruthy();
  });
});
