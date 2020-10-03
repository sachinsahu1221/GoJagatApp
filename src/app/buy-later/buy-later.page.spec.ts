import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyLaterPage } from './buy-later.page';

describe('BuyLaterPage', () => {
  let component: BuyLaterPage;
  let fixture: ComponentFixture<BuyLaterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyLaterPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyLaterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
