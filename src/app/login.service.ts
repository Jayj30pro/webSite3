import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  notLoggedIn = true;

  isAsGuest = true;

  logout() {
    this.isAsGuest = true;
    this.notLoggedIn = true;
  }

  login() {
    this.isAsGuest = false;
    this.notLoggedIn = false;
  }

  guestLogin() {
    this.isAsGuest = true;
    this.notLoggedIn = false;
  }

}
