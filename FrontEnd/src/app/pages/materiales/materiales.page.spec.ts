import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialesPage } from './materiales.page';

describe('MaterialesPage', () => {
  let component: MaterialesPage;
  let fixture: ComponentFixture<MaterialesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
