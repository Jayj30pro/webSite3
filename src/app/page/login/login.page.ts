import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login.service';
import { NavMenuService } from 'src/app/nav-menu.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private _loginService: LoginService,
    private _navMenuService: NavMenuService) { }

  ngOnInit() {
  }

  unameEntered: string = '';
  pwordEntered: string = '';

  login() {
    this._loginService.login();
  }

  logout() {
    this._loginService.logout();
  }
  

  wlcome() {
    this._navMenuService.welcome();
  }

  guest() {

  }

  loginStatus() {
    return this._loginService.notLoggedIn;
  }

  loginSuccess() {
    this._loginService.notLoggedIn = false;
  }

}
