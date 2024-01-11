import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartV1Component } from './shopping-cart-v1.component';

describe('ShoppingCartV1Component', () => {
  let component: ShoppingCartV1Component;
  let fixture: ComponentFixture<ShoppingCartV1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShoppingCartV1Component]
    });
    fixture = TestBed.createComponent(ShoppingCartV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
