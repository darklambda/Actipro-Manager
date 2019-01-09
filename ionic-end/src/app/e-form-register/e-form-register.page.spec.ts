import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EFormRegisterPage } from './e-form-register.page';

describe('EFormRegisterPage', () => {
  let component: EFormRegisterPage;
  let fixture: ComponentFixture<EFormRegisterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EFormRegisterPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EFormRegisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
