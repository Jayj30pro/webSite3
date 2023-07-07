import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavMenuService {

  constructor(private router: Router) { }

  guestUser: string = '';

  about() {
    this.router.navigate(['about']);
  }

  contact() {
    this.router.navigate(['contact']);
  }

  guest() {
    this.router.navigate(['guest']);
  }

  home() {
    this.router.navigate(['home']);
  }

  arcade()  {
    this.router.navigate(['arcade'])
  }

  office() {
    this.router.navigate(['office'])
  }

  projects() {
    this.router.navigate(['projects']);
  }

  skills() {
    this.router.navigate(['skills']);
  }

  welcome() {
    this.router.navigate(['welcome']);
  }

  // no function 

  loginPage() {
    this.router.navigate(['login']);
  }

  signUp() {

  }
  
  // Needs backend

}
