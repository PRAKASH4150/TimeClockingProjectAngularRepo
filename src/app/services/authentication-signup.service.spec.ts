import { TestBed } from '@angular/core/testing';

import { AuthenticationSignupService } from './authentication-signup.service';

describe('AuthenticationSignupService', () => {
  let service: AuthenticationSignupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthenticationSignupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
