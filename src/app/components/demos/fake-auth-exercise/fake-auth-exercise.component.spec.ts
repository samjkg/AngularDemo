import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FakeAuthExerciseComponent } from './fake-auth-exercise.component';

describe('FakeAuthExerciseComponent', () => {
  let component: FakeAuthExerciseComponent;
  let fixture: ComponentFixture<FakeAuthExerciseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FakeAuthExerciseComponent]
    });
    fixture = TestBed.createComponent(FakeAuthExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
