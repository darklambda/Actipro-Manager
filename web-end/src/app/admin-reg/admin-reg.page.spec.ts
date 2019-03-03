import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRegPage } from './admin-reg.page';

describe('AdminRegPage', () => {
  let component: AdminRegPage;
  let fixture: ComponentFixture<AdminRegPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminRegPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRegPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
