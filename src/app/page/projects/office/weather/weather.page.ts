import { Component, OnInit } from '@angular/core';
import { NavMenuService } from 'src/app/nav-menu.service';
import { LoginService } from 'src/app/login.service';
import { HttpClient } from '@angular/common/http';
// weather.component.ts
import { WeatherService } from './weather.service';



@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
})
export class WeatherPage implements OnInit {


  constructor(
    private _navMenuService: NavMenuService,
    private _weatherService: WeatherService,
    private http: HttpClient,
    private _loginService: LoginService) { }

  request = '';

  ngOnInit() {
  }

  currentUser(){
    return this._loginService.getUser();
  }
  
  issignedIn() {
    return this._loginService.isSignedIn();
  }

  getWeather(city: string) {
    console.log(this._weatherService.getWeather(city));
    this._weatherService.getWeather(city).subscribe((data: any) => {
      // Process and display the weather data here
    });
  }

  getWeatherZip(zipCode: string) {
    console.log(this._weatherService.getWeatherZip(zipCode));
  }

  clear() {
    this.request = '';
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
