import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {telValidator} from "../../../shared/validators/tel-validator";
import {addressValidator} from "../../../shared/validators/adress-validator";

@Component({
  selector: 'app-reactive-forms-exercise',
  templateUrl: './reactive-forms-exercise.component.html',
  styleUrls: ['./reactive-forms-exercise.component.scss']
})

export class ReactiveFormsExerciseComponent {

  cvForm : FormGroup = new FormGroup({});

  constructor(private fb : FormBuilder) {

    this.cvForm = this.fb.group({
      lastName: ['', [Validators.minLength(3), Validators.maxLength(20), Validators.required]],
      firstName: ['', [Validators.minLength(2), Validators.maxLength(20), Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone:['', [telValidator(), Validators.required]],
      nickname:['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      job:['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      jobDesc:['', [Validators.required, Validators.maxLength(50)]],
      address: this.fb.group({
        street: [''],
        zip: [''],
        town: [''],
        number: ['']
      }, {validators: addressValidator})
    })
  }

  /**
   * Submits the form if it is valid.
   *
   * @return {void}
   */
  submit() : void {
    if (this.cvForm.valid) {
      console.log(this.cvForm.value);
    }
  }


}
