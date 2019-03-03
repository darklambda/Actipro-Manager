import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntListPage } from './ent-list.page';

describe('EntListPage', () => {
  let component: EntListPage;
  let fixture: ComponentFixture<EntListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
