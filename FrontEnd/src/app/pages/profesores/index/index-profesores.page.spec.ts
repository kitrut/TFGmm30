import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexProfesoresPage } from './index-profesores.page';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpLoaderFactory } from 'src/app/app.module';
import { NgxPaginationModule } from 'ngx-pagination';

describe('IndexProfesoresPage', () => {
  let component: IndexProfesoresPage;
  let fixture: ComponentFixture<IndexProfesoresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexProfesoresPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
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
        NgxPaginationModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexProfesoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
