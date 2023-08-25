import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rockpaperscisors',
  templateUrl: './rockpaperscisors.page.html',
  styleUrls: ['./rockpaperscisors.page.scss'],
})
export class RockpaperscisorsPage implements OnInit {

  playerChoice: string = '';
  computerChoice: string = '';
  result: string = '';

  constructor() { }

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
    } else if (
      (this.playerChoice === 'rock' && this.computerChoice === 'scissors') ||
      (this.playerChoice === 'paper' && this.computerChoice === 'rock') ||
      (this.playerChoice === 'scissors' && this.computerChoice === 'paper')
    ) {
      this.result = `horay ${this.playerChoice}  wins!`;
    } else {
      this.result = 'The computer wins!';
    }
  }

  resetGame(): void {
    this.playerChoice = '';
    this.computerChoice = '';
    this.result = '';
  }
}