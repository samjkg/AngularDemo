import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-fireship-form-v2',
  templateUrl: './fireship-form-v2.component.html',
  styleUrls: ['./fireship-form-v2.component.scss']
})
export class FireshipFormV2Component {

  myForm : FormGroup = new FormGroup({});

  constructor(private fb : FormBuilder) {}

  ngOnInit() {
    const phone = this.fb.group({
      area : [],
      prefix : [],
      line : []
    })

    this.myForm = this.fb.group({
      email : '',
      homePhone: phone,
      cellPhone: phone,
    })

  }

}
