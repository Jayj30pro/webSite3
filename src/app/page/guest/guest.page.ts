import { Component, OnInit } from '@angular/core';
import { NavMenuService } from 'src/app/nav-menu.service';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-guest',
  templateUrl: './guest.page.html',
  styleUrls: ['./guest.page.scss'],
})
export class GuestPage implements OnInit {

  nameEntered: string = '';

  constructor(
    private _navMenuService: NavMenuService,
    private _loginService: LoginService) { }

  ngOnInit() {
  }

  issignedIn() {
    return this._loginService.isSignedIn();
  }

  currentUser(){
    return this._loginService.getUser();
  }

  guestLogin() {
    if (this.nameEntered == '') {
      let isGuest = confirm("you will be signed in as guest")
      if (isGuest) {
        this._loginService.guestLogin('Guest');
        this._navMenuService.home();
      }
    }
    else {
      this._loginService.guestLogin(this.nameEntered);
      this._navMenuService.home();
    }
  }
  
  logout() {
    this._loginService.logout();
    //this._navMenuService.welcome();  // uncomment when loging is ready
    this._navMenuService.guest();
  }
  
  home() {
    this._navMenuService.home();
  }

  cancel(){
    //this._navMenuService.welcome(); // uncomment when loging is ready
    this.nameEntered = '';
  }

// it works with login but not guest


}
