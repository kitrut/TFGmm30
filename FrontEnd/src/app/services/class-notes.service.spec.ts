import { TestBed } from '@angular/core/testing';

import { ClassNotesService } from './class-notes.service';

describe('ClassNotesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClassNotesService = TestBed.get(ClassNotesService);
    expect(service).toBeTruthy();
  });
});
