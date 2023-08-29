import { Component, OnInit } from '@angular/core';
import { NavMenuService } from 'src/app/nav-menu.service';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-rockpaperscisors',
  templateUrl: './rockpaperscisors.page.html',
  styleUrls: ['./rockpaperscisors.page.scss'],
})
export class RockpaperscisorsPage implements OnInit {

  playerChoice: string = '';
  computerChoice: string = '';
  result: string = '';

  constructor(
    private _navMenuService: NavMenuService,
    private _loginService: LoginService) { }


  ngOnInit() {
  }

  selectOption(choice: string): void {
    this.playerChoice = choice;
    this.computerChoice = this.generateComputerChoice();
    this.calculateResult();
  }

  generateComputerChoice(): string {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }

  calculateResult(): void {
    if (this.playerChoice === this.computerChoice) {
      this.result = "It's a tie!";
    } 
    else if 
      (this.playerChoice === 'rock' && this.computerChoice === 'scissors'){
        this.result = "You win!"!;
      }
    
    else if 
      (this.playerChoice === 'paper' && this.computerChoice === 'rock') {
        this.result = "You win!"!;
      }
    else if
      (this.playerChoice === 'scissors' && this.computerChoice === 'paper') {
        this.result = "You win!"!;
      }

    else {
      this.result = 'The computer win!s!';
    }
  }

  resetGame(): void {
    this.playerChoice = '';
    this.computerChoice = '';
    this.result = '';
  }

  issignedIn() {
    return this._loginService.isSignedIn();
  }

    // links to other pages

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