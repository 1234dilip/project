import { TestBed } from '@angular/core/testing';

import { CkeditorService } from './userData.service';

describe('CkeditorService', () => {
  let service: CkeditorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CkeditorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
