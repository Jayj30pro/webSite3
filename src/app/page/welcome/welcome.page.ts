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
    return this._navMenuService.guestUser;
  }

  loginStatus() {
    return this._loginService.isSignedIn();
  }
  
  ngOnInit() {
  }

  loginPage() {
    this._navMenuService.loginPage();
  }

  logout() {
    this._loginService.logout();
    this._loginService.signedIn = false;
  }
  
  home() {
    this._navMenuService.home();
  }

  guest() {
    this._navMenuService.guest();
  }

  signUp() {

  }

  saveName() {
    this._loginService.signedIn = true;
    this._navMenuService.guestUser = this.nameEntered;
    this._loginService.guestLogin();
    this.nameEntered = '';


  }


}
