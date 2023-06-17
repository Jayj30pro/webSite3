import { Component, OnInit } from '@angular/core';
import { NavMenuService } from 'src/app/nav-menu.service';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.page.html',
  styleUrls: ['./skills.page.scss'],
})
export class SkillsPage implements OnInit {

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

  projects() {
    this._navMenuService.projects();
  }

  home() {
    this._navMenuService.home();
  }

  signUp() {

  }

  logout() {
    this._navMenuService.welcome();
    this._loginService.logout();
  }

}
