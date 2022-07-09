import { TestBed } from '@angular/core/testing';
import { CustomerDaoService } from './customer-dao.service';
import { HttpClientModule } from '@angular/common/http';

describe('CustomerDaoService', () => {
  let service: CustomerDaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(CustomerDaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
