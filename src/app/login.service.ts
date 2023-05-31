import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  signedIn = false;


  logout() {

    this.signedIn = false;
  }

  login() {
    this.signedIn = true;
  }

  guestLogin() {
    this.signedIn = true;
  }

  isSignedIn() {
    return this.signedIn;
  }

}
