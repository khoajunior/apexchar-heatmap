import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
//import {HttpModule} from '@angular/http';
import{HttpClient } from '@angular/common/http'
import { CountdownModule } from 'ngx-countdown';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { MessagesComponent }from './messages/messages.component';
 
import { AppRoutingModule } from './app-routing.module';
import { CouttimeComponent } from './couttime/couttime.component';
import { from } from 'rxjs';

import { FusionChartsModule } from 'angular-fusioncharts';
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import { ChartComponent } from './chart/chart.component';

// Import FusionCharts library and chart modules



import { ChartAllModule, AccumulationChartAllModule, RangeNavigatorAllModule } from '@syncfusion/ej2-angular-charts';
import { WeatherComponent } from './weather/weather.component';
import { NewweatherComponent } from './newweather/newweather.component';


// new weather
import { ReactiveFormsModule } from '@angular/forms';
import { ApixuService } from "./apixu.service";
import { ScatterChartComponent } from './scatter-chart/scatter-chart.component';


// demo chart iuhcoder
import { ChartsModule } from 'ng2-charts';
import { FinancialComponent } from './financial/financial.component';
import { CalendarHeatMapComponent } from './calendar-heat-map/calendar-heat-map.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ApexchartComponent } from './apexchart/apexchart.component';

FusionChartsModule.fcRoot(FusionCharts, Charts);

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    CouttimeComponent,
    ChartComponent,
    WeatherComponent,
    NewweatherComponent,
    ScatterChartComponent,
    FinancialComponent,
    CalendarHeatMapComponent,
    BarChartComponent,
    ApexchartComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CountdownModule,
    FusionChartsModule,
    ChartAllModule,
    AccumulationChartAllModule,
    RangeNavigatorAllModule,
    ReactiveFormsModule,
    ChartsModule,
    NgApexchartsModule

  ],
  providers: [ApixuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
