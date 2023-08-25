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

  message = "";
  gameRunning = true;

  topLeft = document.getElementById("top-left");

  ngOnInit() {
  }

  currentUser(){
    return this._loginService.getUser();
  }

  makeMove(place: string){
    if (this.gameRunning){
    let spot = document.getElementById(place);
      if (spot != null){

        if (spot.innerHTML == " - "){
          spot.innerHTML = this.currentPlayer;
          if (this.currentPlayer == "X"){
            this.currentPlayer = "O";
          }
          else {
            this.currentPlayer = "X";
          }
        }
        else {
          alert("Please select an empty space");
        }

        this.checkForGameEnd();  
      
      }
    }
    else {
      alert("this game has ended press reset to start another game.");
    }
  }

  endMessages() {
    this.currentPlayer = "No one";
  }

  checkForGameEnd() {
    //add vertical wins and diagonal wins and no win
    let tl = document.getElementById("top-left");
    let tc = document.getElementById("top-center");
    let tr = document.getElementById("top-right");
    let ml = document.getElementById("mid-left");
    let mc = document.getElementById("mid-center");
    let mr = document.getElementById("mid-right");
    let ll = document.getElementById("low-left");
    let lc = document.getElementById("low-center");
    let lr = document.getElementById("low-right");
    let board =  [];
    

    if(tl != null){board.push(tl.innerHTML);}
    if(tc != null){board.push(tc.innerHTML);}
    if(tr != null){board.push(tr.innerHTML);}
    if(ml != null){board.push(ml.innerHTML);}
    if(mc != null){board.push(mc.innerHTML);}
    if(mr != null){board.push(mr.innerHTML);}
    if(ll != null){board.push(ll.innerHTML);}
    if(lc != null){board.push(lc.innerHTML);}
    if(lr != null){board.push(lr.innerHTML);}

    //horizontal
    if (board[0] == "X" && board[1] == "X" && board[2] == "X") {
      this.message = "X gon give it to ya!!!";
      this.gameRunning = false
      this.endMessages();
      alert("X wins");
    }

    if (board[3] == "X" && board[4] == "X" && board[5] == "X") {
      this.message = "X gon give it to ya!!!";
      this.gameRunning = false
      this.endMessages();
      alert("X wins");
    }

    if (board[6] == "X" && board[7] == "X" && board[8] == "X") {
      this.message = "X gon give it to ya!!!";
      this.gameRunning = false
      this.endMessages();
      alert("X wins");
    }

    if (board[0] == "O" && board[1] == "O" && board[2] == "O") {
      this.message = "Oh Oh it's Magic!";
      this.gameRunning = false
      this.endMessages();
      alert("O wins");
    }

    if (board[3] == "O" && board[4] == "O" && board[5] == "O") {
      this.message = "Oh Oh it's Magic!";
      this.gameRunning = false
      this.endMessages();
      alert("O wins");
    }

    if (board[6] == "O" && board[7] == "O" && board[8] == "O") {
      this.message = "Oh Oh it's Magic!";
      this.gameRunning = false
      this.endMessages();
      alert("O wins");
    }

    //vertical
    if (board[0] == "X" && board[3] == "X" && board[6] == "X") {
      this.message = "X gon give it to ya!!!";
      this.gameRunning = false
      this.endMessages();
      alert("X wins");
    }

    if (board[1] == "X" && board[4] == "X" && board[7] == "X") {
      this.message = "X gon give it to ya!!!";
      this.gameRunning = false
      this.endMessages();
      alert("X wins");
    }

    if (board[2] == "X" && board[5] == "X" && board[8] == "X") {
      this.message = "X gon give it to ya!!!";
      this.gameRunning = false
      this.endMessages();
      alert("X wins");
    }

    if (board[0] == "O" && board[3] == "O" && board[6] == "O") {
      this.message = "Oh Oh it's Magic!";
      this.gameRunning = false
      this.endMessages();
      alert("O wins");
    }

    if (board[1] == "O" && board[4] == "O" && board[7] == "O") {
      this.message = "Oh Oh it's Magic!";
      this.gameRunning = false
      this.endMessages();
      alert("O wins");
    }

    if (board[2] == "O" && board[5] == "O" && board[8] == "O") {
      this.message = "Oh Oh it's Magic!";
      this.gameRunning = false
      this.endMessages();
      alert("O wins");
    }

    //diagonal

    if (board[0] == "X" && board[4] == "X" && board[8] == "X") {
      this.message = "X gon give it to ya!!!";
      this.gameRunning = false
      this.endMessages();
      alert("X wins");
    }

    if (board[2] == "X" && board[4] == "X" && board[6] == "X") {
      this.message = "X gon give it to ya!!!";
      this.gameRunning = false
      this.endMessages();
      alert("X wins");
    }

    if (board[0] == "O" && board[4] == "O" && board[8] == "O") {
      this.message = "Oh Oh it's Magic!";
      this.gameRunning = false
      this.endMessages();
      alert("O wins");
    }

    if (board[2] == "O" && board[4] == "O" && board[6] == "O") {
      this.message = "Oh Oh it's Magic!";
      this.gameRunning = false
      this.endMessages();
      alert("O wins");
    }

    // no more moves
    if(this.gameRunning){
      if (board[0] != " - " && board[1] != " - " && board[2] != " - " && board[3] != " - " && board[4] != " - " && board[5] != " - " && board[6] != " - " && board[7] != " - " && board[8] != " - ") {
        this.message = "No more moves left";
        this.gameRunning = false
        this.endMessages();
        alert("Draw");
      }
    }

  }

  reset(){
    let tl = document.getElementById("top-left");
    let tc = document.getElementById("top-center");
    let tr = document.getElementById("top-right");
    let ml = document.getElementById("mid-left");
    let mc = document.getElementById("mid-center");
    let mr = document.getElementById("mid-right");
    let ll = document.getElementById("low-left");
    let lc = document.getElementById("low-center");
    let lr = document.getElementById("low-right");

    
    if(tl != null){tl.innerHTML = " - ";}
    if(tc != null){tc.innerHTML = " - ";}
    if(tr != null){tr.innerHTML = " - ";}
    if(ml != null){ml.innerHTML = " - ";}
    if(mc != null){mc.innerHTML = " - ";}
    if(mr != null){mr.innerHTML = " - ";}
    if(ll != null){ll.innerHTML = " - ";}
    if(lc != null){lc.innerHTML = " - ";}
    if(lr != null){lr.innerHTML = " - ";}
    this.currentPlayer = "X";
    this.message = "";
    this.gameRunning = true;

  }

  
  issignedIn() {
    return this._loginService.isSignedIn();
  }
  
  // functions to other pages 

  rockpaperscisors() {
    this._navMenuService.rockpaperscisors();
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

  // exit

  logout() {
    this._navMenuService.welcome();
    this._loginService.logout();
  }

}
