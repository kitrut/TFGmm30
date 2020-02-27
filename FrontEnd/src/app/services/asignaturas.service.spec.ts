import { TestBed } from '@angular/core/testing';

import { AsignaturasService } from './asignaturas.service';
import { HttpClientModule } from '@angular/common/http';

describe('AsignaturasService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientModule, ]
  }));

  it('should be created', () => {
    const service: AsignaturasService = TestBed.inject(AsignaturasService);
    expect(service).toBeTruthy();
  });
});
