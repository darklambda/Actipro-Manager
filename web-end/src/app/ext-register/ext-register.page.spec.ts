import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtRegisterPage } from './ext-register.page';

describe('ExtRegisterPage', () => {
  let component: ExtRegisterPage;
  let fixture: ComponentFixture<ExtRegisterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtRegisterPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtRegisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
