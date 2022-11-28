import { TestBed } from '@angular/core/testing';

import { Guard5Guard } from './guard5.guard';

describe('Guard5Guard', () => {
  let guard: Guard5Guard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(Guard5Guard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
