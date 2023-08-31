import { Component, OnInit } from '@angular/core';
import { NavMenuService } from 'src/app/nav-menu.service';
import { LoginService } from 'src/app/login.service';
import { NotetakerModelService } from './notetaker-model.service';

@Component({
  selector: 'app-notetaker',
  templateUrl: './notetaker.page.html',
  styleUrls: ['./notetaker.page.scss'],
})
export class NotetakerPage implements OnInit {

  constructor(
    private _navMenuService: NavMenuService,
    private _noteModel: NotetakerModelService,
    private _loginService: LoginService) { }

    entry = '';

    ngOnInit() {
    }

    currentUser(){
      return this._loginService.getUser();
    }
    
    issignedIn() {
      return this._loginService.isSignedIn();
    }
  
    // List functions

    getNotes(){
      return this._noteModel.getNotes();
    }

    add(note: string) {
      if (note != ''){
        this._noteModel.add(note);
        // remove comment when commiting this.clear();
      }
      
    }

    removeItem(note: string) {
      let x = this.getNotes().indexOf(note);
      this._noteModel.notes.splice(x,1);
    }

    clear() {
      this.entry = '';
    }
    
    // links to other pages
    about() {
      this._navMenuService.about();
    }
  
    home() {
      this._navMenuService.home();
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
