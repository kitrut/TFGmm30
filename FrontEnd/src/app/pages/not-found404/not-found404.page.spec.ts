import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFound404Page } from './not-found404.page';

describe('NotFound404Page', () => {
  let component: NotFound404Page;
  let fixture: ComponentFixture<NotFound404Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotFound404Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFound404Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
