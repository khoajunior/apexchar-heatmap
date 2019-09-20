import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { CouttimeComponent } from './couttime/couttime.component';
import {ChartComponent} from './chart/chart.component';
import {WeatherComponent} from './weather/weather.component';
import {NewweatherComponent} from './newweather/newweather.component';
import {ScatterChartComponent} from './scatter-chart/scatter-chart.component';
import {FinancialComponent} from './financial/financial.component';
import {CalendarHeatMapComponent} from './calendar-heat-map/calendar-heat-map.component';
import {BarChartComponent} from './bar-chart/bar-chart.component';
import {ApexchartComponent} from './apexchart/apexchart.component';

import { from } from 'rxjs';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'counttime', component: CouttimeComponent},
  {path:'chart',component:ChartComponent},
  {path:'weather',component:WeatherComponent},
  {path:'newweather',component:NewweatherComponent},
  {path:'scatter-chart',component:ScatterChartComponent},
  {path:'Financial',component:FinancialComponent},
  {path:'CalendarHeatMap',component:CalendarHeatMapComponent},
  {path:'BarChart',component:BarChartComponent},
  {path:'Apexchart' ,component:ApexchartComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
