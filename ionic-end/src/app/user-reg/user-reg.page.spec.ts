import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRegPage } from './user-reg.page';

describe('UserRegPage', () => {
  let component: UserRegPage;
  let fixture: ComponentFixture<UserRegPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserRegPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRegPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
