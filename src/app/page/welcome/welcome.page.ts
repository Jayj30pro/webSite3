import { Component, OnInit } from '@angular/core';
import { NavMenuService } from 'src/app/nav-menu.service';




@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  constructor(private _navMenuService: NavMenuService) { }

  ngOnInit() {
  }

  login() {
    this._navMenuService.login();
  }

  guest() {

  }

  signUp() {

  }


}
