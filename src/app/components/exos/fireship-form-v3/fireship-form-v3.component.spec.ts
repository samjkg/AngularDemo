import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FireshipFormV3Component } from './fireship-form-v3.component';

describe('FireshipFormV3Component', () => {
  let component: FireshipFormV3Component;
  let fixture: ComponentFixture<FireshipFormV3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FireshipFormV3Component]
    });
    fixture = TestBed.createComponent(FireshipFormV3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
