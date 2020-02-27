import { TestBed } from '@angular/core/testing';

import { AlumnosService } from './alumnos.service';
import { HttpClientModule } from '@angular/common/http';

describe('AlumnosService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: AlumnosService = TestBed.inject(AlumnosService);
    expect(service).toBeTruthy();
  });
});
