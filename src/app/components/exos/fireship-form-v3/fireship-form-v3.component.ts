import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-fireship-form-v3',
  templateUrl: './fireship-form-v3.component.html',
  styleUrls: ['./fireship-form-v3.component.scss']
})
export class FireshipFormV3Component {

  myForm : FormGroup = new FormGroup({});

  constructor(private fb : FormBuilder) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ['', [
        Validators.required,
        Validators.pattern('^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)(?=.*[@$!%_*?&])[A-Za-z\\d@$!%*?&]{6,72}$')
      ]],
      age: ['', [
        Validators.required,
        Validators.min(18),
        Validators.max(65)
      ]],
      agree: [false, [
        Validators.requiredTrue
      ]]
    });
  }

  get email() {
      return this.myForm.get('email');
  }

  get password() {
      return this.myForm.get('password');
  }

  get age() {
      return this.myForm.get('age');
  }

  get agree() {
      return this.myForm.get('agree');
  }

  sendInfo() : void {
    if (this.myForm.valid) {
      console.log(this.myForm.value)
    }
  }

}
