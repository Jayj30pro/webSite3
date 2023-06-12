import { Component, OnInit } from '@angular/core';
import { NavMenuService } from 'src/app/nav-menu.service';
import { LoginService } from 'src/app/login.service';



@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  constructor(
    private _navMenuService: NavMenuService,
    private _loginService: LoginService) { }

  nameEntered: string = '';

  issignedIn() {
    return this._loginService.isSignedIn();
  }
  
  currentUser(){
    return this._loginService.getUser();
  }

  ngOnInit() {
  }

  loginPage() {
    this._navMenuService.loginPage();
  }

  logout() {
    this._loginService.logout();
  }
  
  home() {
    this._navMenuService.home();
  }

  guest() {
    this._navMenuService.guest();
  }

  signUp() {

  }


  // it works with login but not guest



}
