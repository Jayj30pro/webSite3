import { Component, OnInit } from '@angular/core';
import { NavMenuService } from 'src/app/nav-menu.service';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-guest',
  templateUrl: './guest.page.html',
  styleUrls: ['./guest.page.scss'],
})
export class GuestPage implements OnInit {

  constructor(
    private _navMenuService: NavMenuService,
    private _loginService: LoginService) { }

  ngOnInit() {
  }

  issignedIn() {
    return this._loginService.isSignedIn();
  }
  
  logout() {
    this._loginService.logout();
    this._loginService.signedIn = false;
  }
  
  home() {
    this._navMenuService.home();
  }


}
