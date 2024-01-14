import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingListParentComponent } from './shopping-list-parent.component';

describe('ShoppingListParentComponent', () => {
  let component: ShoppingListParentComponent;
  let fixture: ComponentFixture<ShoppingListParentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShoppingListParentComponent]
    });
    fixture = TestBed.createComponent(ShoppingListParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
