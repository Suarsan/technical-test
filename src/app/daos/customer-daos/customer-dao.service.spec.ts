import { TestBed } from '@angular/core/testing';

import { CustomerDaoService } from './customer-dao.service';

describe('CustomerDaoService', () => {
  let service: CustomerDaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerDaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
