import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexProfesoresPage } from './index-profesores.page';

describe('IndexProfesoresPage', () => {
  let component: IndexProfesoresPage;
  let fixture: ComponentFixture<IndexProfesoresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexProfesoresPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
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
