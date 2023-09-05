import { Component, OnInit } from '@angular/core';
import { NavMenuService } from 'src/app/nav-menu.service';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.page.html',
  styleUrls: ['./projects.page.scss'],
})
export class ProjectsPage implements OnInit {

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

  projects() {
    this._navMenuService.projects();
  }

  skills() {
    this._navMenuService.skills()
  }

  signUp() {

  }

  logout() {
    // this._navMenuService.welcome(); // uncomment when loging is ready
    this._loginService.logout();
    this._navMenuService.guest();
  }

}
