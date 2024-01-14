import { Component } from '@angular/core';
import {FakeAuthService} from "../fake-auth.service";

@Component({
  selector: 'app-fake-auth-exercise',
  templateUrl: './fake-auth-exercise.component.html',
  styleUrls: ['./fake-auth-exercise.component.scss']
})
export class FakeAuthExerciseComponent {

  username : string = "";
  password : string = "";

  constructor(private _auth : FakeAuthService) {}

  login() : void {
    if (this._auth.Login(this.username, this.password)) {
      console.log('Login Réussi');
    } else {
      console.log("Mauvaise combinaison");
    }
  }

}
