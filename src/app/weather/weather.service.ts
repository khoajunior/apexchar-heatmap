import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { getTemplateContent } from '@angular/core/src/sanitization/html_sanitizer';
import { stringToNumber } from '@syncfusion/ej2-charts/src/sparkline/utils/helper';
@Injectable()
export class WeatherService{
    constructor (private http:HttpClient){

        
        }
        getTemp(Cityname : string ){
            // const url = 'http://api.openweathermap.org/data/2.5/weather?&APPID=21c2ec360751aab18d2b49ec6f0e1e13&q=' + Cityname;
            // return this.http.get(url)
            // .toPromise()
            // .then(res =>res.json())
            // .then(resJson =>resJson.main.temp)
    }
}