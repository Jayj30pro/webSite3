import { Component } from '@angular/core';
import { NavMenuService } from '../nav-menu.service';
import { LoginService } from '../login.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private _navMenuService: NavMenuService,
    private _loginService: LoginService) { }

  currentUser(){
    return this._loginService.getUser();
  }
  
  issignedIn() {
    return this._loginService.isSignedIn();
  }
  
  about() {
    this._navMenuService.about();
  }

  projects() {
    this._navMenuService.projects();
  }

  skills() {
    this._navMenuService.skills()
  }

  signUp() {

  }

  logout() {
    this._navMenuService.welcome();
    this._loginService.logout();
  }



}
