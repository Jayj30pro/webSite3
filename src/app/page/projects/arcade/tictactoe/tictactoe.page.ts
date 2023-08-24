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

  currentPlayer = "X";

  ngOnInit() {
  }

  currentUser(){
    return this._loginService.getUser();
  }

  makeMove(place: string){
    let spot = document.getElementById(place);
    if (spot != null){
      spot.innerHTML = this.currentPlayer;
      if (this.currentPlayer == "X"){
        this.currentPlayer = "O";
      }
      else {
        this.currentPlayer = "X";
      }
    }
  }
  
  issignedIn() {
    return this._loginService.isSignedIn();
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

  home() {
    this._navMenuService.home();
  }

  skills() {
    this._navMenuService.skills()
  }

  about() {
    this._navMenuService.about();
  }

  logout() {
    this._navMenuService.welcome();
    this._loginService.logout();
  }

}
