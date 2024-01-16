import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalizeCartComponent } from './finalize-cart.component';

describe('FinalizeCartComponent', () => {
  let component: FinalizeCartComponent;
  let fixture: ComponentFixture<FinalizeCartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FinalizeCartComponent]
    });
    fixture = TestBed.createComponent(FinalizeCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
