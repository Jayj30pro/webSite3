import { Component, OnInit } from '@angular/core';
import { NavMenuService } from 'src/app/nav-menu.service';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-tictactoe',
  templateUrl: './tictactoe.page.html',
  styleUrls: ['./tictactoe.page.scss'],
})
export class TictactoePage implements OnInit {

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

  rockpaperscisors() {
    this._navMenuService.rockpaperscisors();
  }

  tictactoe() {
    this._navMenuService.tictactoe();
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
    this._navMenuService.welcome();
    this._loginService.logout();
  }

}
