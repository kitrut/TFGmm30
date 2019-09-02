import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMaterialesPage } from './add-materiales.page';

describe('AddMaterialesPage', () => {
  let component: AddMaterialesPage;
  let fixture: ComponentFixture<AddMaterialesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMaterialesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMaterialesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
