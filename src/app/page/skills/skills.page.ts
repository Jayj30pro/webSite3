import { Component, OnInit } from '@angular/core';
import { NavMenuService } from 'src/app/nav-menu.service';
import { LoginService } from 'src/app/login.service';
import { SkillsModelService } from './_services/skills.model.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.page.html',
  styleUrls: ['./skills.page.scss'],
})
export class SkillsPage implements OnInit {

  constructor(
    private _navMenuService: NavMenuService,
    private _loginService: LoginService,
    private _skillsModelService: SkillsModelService) { }

  ngOnInit() {
  }

  selected = this._skillsModelService.pictures[3];

  

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

  itemSelect(entry: number) {
    this.selected = this._skillsModelService.itemSelect(entry);
    this.lightSwitch = true;
  }

  lightSwitch = false;

  lightsOff() {
    this.lightSwitch = false;
  }

  logout() {
    this._navMenuService.welcome();
    this._loginService.logout();
  }

}
