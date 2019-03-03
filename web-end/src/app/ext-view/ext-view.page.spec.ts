import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtViewPage } from './ext-view.page';

describe('ExtViewPage', () => {
  let component: ExtViewPage;
  let fixture: ComponentFixture<ExtViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtViewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
