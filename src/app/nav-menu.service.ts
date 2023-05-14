import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavMenuService {

  constructor(private router: Router) { }

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
