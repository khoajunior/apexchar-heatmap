import { Component, OnInit } from '@angular/core';
import ApexCharts from 'apexcharts';
@Component({
  selector: 'app-apexchart',
  templateUrl: './apexchart.component.html',
  styleUrls: ['./apexchart.component.css']
})
export class ApexchartComponent implements OnInit {

  constructor() { }

  generateData(count, yrange) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = (i + 1).toString();
      var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

      series.push({
        x: x,
        y: y
      });
      i++;
    }
    console.log(series);
    return series;
  }

  ngOnInit() {
    let options = {
      chart: {
        height: 350,
        type: 'heatmap',
      },
      plotOptions: {
        heatmap: {
          shadeIntensity: 0.5,

          colorScale: {
            ranges: [{
                from: -1,
                to: 0,
                name: 'low',
                color: '#ECECEC'
              },
              {
                from: 1,
                to: 5,
                name: 'medium',
                color: '#C8E2B1'
              },
              {
                from: 6,
                to: 8,
                name: 'high',
                color: '#5BBD2B'
              },
              {
                from: 8,
                to: 10,
                name: 'extreme',
                color: '#007F54'
              }
            ]
          }
        }
      },
      dataLabels: {
        enabled: false
      },
      series: [{
          name: 'Mon',
          // tslint:disable-next-line: max-line-length
          data:[{ x: '1', y: 5 }, { x: '1', y: 0 }, { x: '3', y: 0 }, { x: '4', y: 0},{ x: '5', y: 0},{ x: '6', y: 0},{ x: '7', y: 0},{ x: '10', y: 0},{ x: '11', y: 0},{ x: '12', y: 0}]
        },
        {
          name: 'Tus',
          data: this.generateData(12, {
            min: 0,
            max: 0
          })
        },
        {
          name: 'Wed',
          data: this.generateData(12, {
            min: 0,
            max: 0
          })
        },
        {
          name: 'Thu',
          data: this.generateData(12, {
            min: 0,
            max: 0
          })
        },
        {
          name: 'Fri',
          data: this.generateData(12, {
            min: 0,
            max: 0
          })
        },
        {
          name: 'Sat',
          data: this.generateData(12, {
            min: 0,
            max: 0
          })
        },
        {
          name: 'Sun',
          data: this.generateData(12, {
            min: 0,
            max: 0
          })
        }
      ],
      xaxis: {
        categories: ['t1','t2','t3','t4',"t5",'t6','t7','t8','t9','t10','t11','t12']
      },
      yaxis: {
        categories: ['Mon','Tus','Wed','Thu',"Fri",'Sat','Sun']
      },
      title: {
        text: 'HeatMap Chart with Color Range'
      },

    }

    let chart = new ApexCharts(document.querySelector("#chart"), options);

    chart.render();

  }
}
