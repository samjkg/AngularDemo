import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FireshipFormV2Component } from './fireship-form-v2.component';

describe('FireshipFormV2Component', () => {
  let component: FireshipFormV2Component;
  let fixture: ComponentFixture<FireshipFormV2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FireshipFormV2Component]
    });
    fixture = TestBed.createComponent(FireshipFormV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
