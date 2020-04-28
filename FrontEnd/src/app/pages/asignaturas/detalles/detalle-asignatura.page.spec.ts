import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleAsignaturaPage } from './detalle-asignatura.page';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpLoaderFactory } from 'src/app/app.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { LMarkdownEditorModule } from 'ngx-markdown-editor';

describe('DetalleAsignaturaPage', () => {
  let component: DetalleAsignaturaPage;
  let fixture: ComponentFixture<DetalleAsignaturaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleAsignaturaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [
        RouterTestingModule.withRoutes([]),
        HttpClientModule,
        TranslateModule.forRoot({
          loader: {
              provide: TranslateLoader,
              useFactory: HttpLoaderFactory,
              deps: [HttpClient]
          }
        }),
        NgxPaginationModule,
        LMarkdownEditorModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleAsignaturaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
