import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FireshipFormComponent } from './fireship-form.component';

describe('FireshipFormComponent', () => {
  let component: FireshipFormComponent;
  let fixture: ComponentFixture<FireshipFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FireshipFormComponent]
    });
    fixture = TestBed.createComponent(FireshipFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
