import { TestBed } from '@angular/core/testing';

import { InterceptorService } from './interceptor.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpLoaderFactory } from '../app.module';
import { HttpClient } from '@angular/common/http';

describe('InterceptorService', () => {
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
      }),],
  }));

  it('should be created', () => {
    const service: InterceptorService = TestBed.get(InterceptorService);
    expect(service).toBeTruthy();
  });
});
