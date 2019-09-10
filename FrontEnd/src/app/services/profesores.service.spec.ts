import { TestBed } from '@angular/core/testing';

import { ProfesoresService } from './profesores.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicStorageModule } from '@ionic/storage';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpLoaderFactory } from '../app.module';

describe('ProfesoresService', () => {
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
    const service: ProfesoresService = TestBed.get(ProfesoresService);
    expect(service).toBeTruthy();
  });
});
