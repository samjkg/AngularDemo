import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {GuardsService} from "./guards.service";

@Component({
  selector: 'app-guards',
  templateUrl: './guards.component.html',
  styleUrls: ['./guards.component.scss']
})
export class GuardsComponent implements OnInit{

  loginForm : FormGroup = new FormGroup({});

  isLoggedIn : Observable<boolean>;

  constructor(private _router:Router, private _fb : FormBuilder, private _auth : GuardsService) {
    this.isLoggedIn = this._auth.isLoggedIn;
  }

  ngOnInit() : void {
    this.loginForm = this._fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  onSubmit() : void {
    if (this.loginForm.invalid) {
      return;
    }
    this._auth.userLogin(this.loginForm.value);
    this._router.navigate(['demos/guards/secret-page'])
  }

}
