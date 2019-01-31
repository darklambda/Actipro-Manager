import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EFormEditPage } from './eform-edit.page';

describe('EFormEditPage', () => {
  let component: EFormEditPage;
  let fixture: ComponentFixture<EFormEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EFormEditPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EFormEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
