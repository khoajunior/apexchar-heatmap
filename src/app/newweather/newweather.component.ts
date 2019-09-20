import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApixuService } from "../apixu.service";
@Component({
  selector: 'app-newweather',
  templateUrl: './newweather.component.html',
  styleUrls: ['./newweather.component.css']
})
export class NewweatherComponent implements OnInit {


  public weatherSearchForm: FormGroup;
  //private apixuService: ApixuService;
  public weatherData: any;
  constructor(
    private formBuilder: FormBuilder,
    private apixuService: ApixuService, // có nó mới chạy dc ko sai đâu Dependency Injection (DI)
  ) {}

  ngOnInit() {

    this.weatherSearchForm = this.formBuilder.group({
      location: ['']
    });
  }

  sendToAPIXU(formValues) {
    //console.log(formValues);
    // this.apixuService
    // .getWeather(formValues.location)
    // .subscribe(data => this.weatherData = data)
    //   console.log(this.weatherData);
    // }

    // this.apixuService
    //   .getWeather(formValues.location)
    //   .subscribe(data => console.log(data));

    this.apixuService.getWeather(formValues.location).subscribe(data => {
      this.weatherData = data;
      console.log(this.weatherData);
    },
    err=>{
      console.log('sai sai');
    });
  }
}
