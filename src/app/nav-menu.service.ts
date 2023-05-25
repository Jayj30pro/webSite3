import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavMenuService {

  constructor(private router: Router) { }

  guestUser: string = '';

  loginPage() {
    this.router.navigate(['login']);
  }

  guest() {

  }

  signUp() {

  }

  welcome() {
    this.router.navigate(['welcome']);
  }


}
