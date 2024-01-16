import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {telValidator} from "../../../shared/validators/tel-validator";

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent {
  formUser : FormGroup = new FormGroup({});

  constructor(private fb : FormBuilder) {

    this.formUser = this.fb.group({
      lastName: ['', [Validators.minLength(3), Validators.required]],
      firstName: ['', [Validators.maxLength(20), Validators.required]],
      phone:['', [telValidator()]]
    })
  }

  submitUserForm() : void {
    if (this.formUser.valid) {
      console.log(this.formUser.value);
    }
  }

}
