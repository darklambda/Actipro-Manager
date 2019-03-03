import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntRegPage } from './ent-reg.page';

describe('EntRegPage', () => {
  let component: EntRegPage;
  let fixture: ComponentFixture<EntRegPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntRegPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntRegPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
