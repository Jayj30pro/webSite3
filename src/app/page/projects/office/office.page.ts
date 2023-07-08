import { Component, OnInit } from '@angular/core';
import { NavMenuService } from 'src/app/nav-menu.service';
import { LoginService } from 'src/app/login.service';


@Component({
  selector: 'app-office',
  templateUrl: './office.page.html',
  styleUrls: ['./office.page.scss'],
})
export class OfficePage implements OnInit {

  constructor(
    private _navMenuService: NavMenuService,
    private _loginService: LoginService) { }

  
    ngOnInit() {
    }
  
    currentUser(){
      return this._loginService.getUser();
    }
    
    issignedIn() {
      return this._loginService.isSignedIn();
    }
  
    
    
    about() {
      this._navMenuService.about();
    }
  
    home() {
      this._navMenuService.home();
    }
  
    arcade() {
      this._navMenuService.arcade();
    }
  
    office() {
      this._navMenuService.office();
    }

    notetaker() {
      this._navMenuService.notetaker();
    }

    weather() {
      this._navMenuService.weather();
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
  