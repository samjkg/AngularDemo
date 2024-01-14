import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartV3Component } from './shopping-cart-v3.component';

describe('ShoppingCartV3Component', () => {
  let component: ShoppingCartV3Component;
  let fixture: ComponentFixture<ShoppingCartV3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShoppingCartV3Component]
    });
    fixture = TestBed.createComponent(ShoppingCartV3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
