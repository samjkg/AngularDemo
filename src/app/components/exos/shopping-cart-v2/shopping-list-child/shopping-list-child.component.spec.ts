import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingListChildComponent } from './shopping-list-child.component';

describe('ShoppingListChildComponent', () => {
  let component: ShoppingListChildComponent;
  let fixture: ComponentFixture<ShoppingListChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShoppingListChildComponent]
    });
    fixture = TestBed.createComponent(ShoppingListChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
