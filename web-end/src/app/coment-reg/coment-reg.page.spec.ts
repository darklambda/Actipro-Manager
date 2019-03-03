import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentRegPage } from './coment-reg.page';

describe('ComentRegPage', () => {
  let component: ComentRegPage;
  let fixture: ComponentFixture<ComentRegPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComentRegPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComentRegPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
