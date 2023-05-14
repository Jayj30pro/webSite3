import { Component } from '@angular/core';
import { NavMenuService } from '../nav-menu.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private _navMenuService: NavMenuService) { }

  welcome() {
    this._navMenuService.welcome();
  }

  guest() {

  }

  signUp() {

  }


}
