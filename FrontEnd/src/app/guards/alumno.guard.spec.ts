import { TestBed, async, inject } from '@angular/core/testing';

import { AlumnoGuard } from './alumno.guard';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpLoaderFactory } from '../app.module';
import { HttpClient } from '@angular/common/http';

describe('AlumnoGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlumnoGuard],
      imports: [
        RouterTestingModule.withRoutes([]),
        HttpClientModule,
        IonicStorageModule.forRoot(),
        TranslateModule.forRoot({
          loader: {
              provide: TranslateLoader,
              useFactory: HttpLoaderFactory,
              deps: [HttpClient]
          }
        }), ],
    });
  });

  it('should ...', inject([AlumnoGuard], (guard: AlumnoGuard) => {
    expect(guard).toBeTruthy();
  }));
});
