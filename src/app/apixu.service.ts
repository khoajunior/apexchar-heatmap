import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) { }

  getWeather(location){
    return this.http.get(
        'https://api.apixu.com/v1/current.json?key=0dc2e8b8498840ba850142556190406&q=' + location
    );
}
}
