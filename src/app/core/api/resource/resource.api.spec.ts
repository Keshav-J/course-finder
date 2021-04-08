import { TestBed } from '@angular/core/testing';

import { ResourceApi } from './resource.api';

describe('Resource.ApiService', () => {
  let service: ResourceApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResourceApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
