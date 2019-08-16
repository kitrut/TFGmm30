import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IndexAsignaturaPage } from './index-asignatura.page';


describe('IndexAsignaturaPage', () => {
  let component: IndexAsignaturaPage;
  let fixture: ComponentFixture<IndexAsignaturaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexAsignaturaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexAsignaturaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
