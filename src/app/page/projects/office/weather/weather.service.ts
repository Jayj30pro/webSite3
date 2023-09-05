// weather.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = 'YOUR_API_KEY';
  private apiUrl = 'https://api.openweathermap.org/data/2.5/';

  constructor(private http: HttpClient) { }

  getWeather(city: string) {
    return this.http.get(`${this.apiUrl}weather?q=${city}&appid=${this.apiKey}`);
  }

  getForecast(city: string) {
    return this.http.get(`${this.apiUrl}forecast?q=${city}&appid=${this.apiKey}`);
  }
}
