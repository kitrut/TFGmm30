import { TestBed } from '@angular/core/testing';

import { TutoringService } from './tutoring.service';

describe('TutoringService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TutoringService = TestBed.inject(TutoringService);
    expect(service).toBeTruthy();
  });
});
