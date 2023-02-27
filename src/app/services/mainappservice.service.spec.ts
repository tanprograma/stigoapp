import { TestBed } from '@angular/core/testing';

import { MainappserviceService } from './mainappservice.service';

describe('MainappserviceService', () => {
  let service: MainappserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainappserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
