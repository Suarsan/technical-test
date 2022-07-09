import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { UserDaoService } from './user-dao.service';

describe('UserDaoService', () => {
  let service: UserDaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(UserDaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
