import { TestBed } from '@angular/core/testing';

import { UserApi } from './user.api';

describe('UserService', () => {
  let service: UserApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
