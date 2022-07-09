import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { InterceptorAuthService } from './interceptor-auth.service';

describe('InterceptorAuthService', () => {
  let service: InterceptorAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        RouterTestingModule]
    });
    service = TestBed.inject(InterceptorAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
