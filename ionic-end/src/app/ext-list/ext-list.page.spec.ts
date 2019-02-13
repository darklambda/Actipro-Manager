import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtListPage } from './ext-list.page';

describe('ExtListPage', () => {
  let component: ExtListPage;
  let fixture: ComponentFixture<ExtListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
