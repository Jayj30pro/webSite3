import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavMenuService {

  constructor(private router: Router) { }

  currentUser: string = 'New User';

  login() {
    this.router.navigate(['home']);
  }

  guest() {

  }

  signUp() {

  }

  welcome() {
    this.router.navigate(['welcome']);
  }


}
