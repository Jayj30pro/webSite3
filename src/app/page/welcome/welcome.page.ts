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
  
  currentUser(){
    return this._navMenuService.guestUser;
  }

  loginStatus() {
    return this._loginService.notLoggedIn;
  }
  
  ngOnInit() {
  }

  loginPage() {
    this._navMenuService.loginPage();
  }

  logout() {
    this._loginService.logout();
  }
  

  guest() {

  }

  signUp() {

  }

  saveName() {
    this._navMenuService.guestUser = this.nameEntered;
    this._loginService.guestLogin();
    this.nameEntered = '';


  }


}
