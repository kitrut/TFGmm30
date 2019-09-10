import { TestBed } from '@angular/core/testing';

import { ProfesoresService } from './profesores.service';
import { HttpClientModule } from '@angular/common/http';

describe('ProfesoresService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientModule,]
  }));

  it('should be created', () => {
    const service: ProfesoresService = TestBed.get(ProfesoresService);
    expect(service).toBeTruthy();
  });
});
