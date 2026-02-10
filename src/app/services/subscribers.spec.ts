import { TestBed } from '@angular/core/testing';

import { Subscribers } from './subscribers';

describe('Subscribers', () => {
  let service: Subscribers;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Subscribers);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
