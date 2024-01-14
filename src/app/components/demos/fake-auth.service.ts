import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FakeAuthService {

  isAuthenticated : boolean = false;

  Login(username : string, password : string) : boolean {
    this.isAuthenticated = username === "user" && password === "password";
    console.log(username + password)
    return this.isAuthenticated;
  }

}
