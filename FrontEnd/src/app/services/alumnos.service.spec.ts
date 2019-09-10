import { TestBed } from '@angular/core/testing';

import { AlumnosService } from './alumnos.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicStorageModule } from '@ionic/storage';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpLoaderFactory } from '../app.module';

describe('AlumnosService', () => {
  beforeEach(() => TestBed.configureTestingModule({
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
      }),
    ]
  }));

  it('should be created', () => {
    const service: AlumnosService = TestBed.get(AlumnosService);
    expect(service).toBeTruthy();
  });
});
