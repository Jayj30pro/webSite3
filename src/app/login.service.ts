import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  signedIn = false;

  currentUser: string = '';


  logout() {

    this.signedIn = false;
    this.currentUser = '';
  }

  login() {
    this.signedIn = true;
  }

  guestLogin(name:string) {
    this.signedIn = true;
    this.currentUser = name;

  }

  isSignedIn() {
    return this.signedIn;
  }

  getUser() {
    return this.currentUser;
  }

}
