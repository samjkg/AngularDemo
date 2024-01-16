import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';
import {
  logBuilderStatusWarnings
} from "@angular-devkit/build-angular/src/builders/browser-esbuild/builder-status-warnings";

@Component({
  selector: 'app-fireship-form',
  templateUrl: './fireship-form.component.html',
  styleUrls: ['./fireship-form.component.scss']
})
export class FireshipFormComponent {

  myForm : FormGroup = new FormGroup({});

  constructor(private fb : FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      email: '',
      message: '',
      career: ''
    })

    this.myForm.valueChanges.subscribe(console.log)

  }

}
