import { Component, OnInit } from '@angular/core';
// @ts-ignore
import ApexCharts from 'apexcharts';
import { ISeries, IChartData } from './apex-defined';
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
    // console.log(series);
    return series;
  }

  ngOnInit() {
    // giá trị lấy từ api
    const metaData = [{
      name: 'tuan 1',
      // tslint:disable-next-line:max-line-length
      data: [{ x: '1', y: 9 }, { x: '1', y: 8 }, { x: '3', y: 0 }, { x: '4', y: 0}, { x: '5', y: 0}, { x: '6', y: 0}, { x: '7', y: 0}, { x: '8', y: 0}, { x: '9', y: 0}, { x: '10', y: 0}, { x: '11', y: 0}, { x: '12', y: 0}]
    }];

    // convert từ giá trị api
    const series: ISeries = {
      name: metaData[0].name,
      data: metaData[0].data.map(metaItem => {
        const idata: IChartData = {
          x: metaItem.x,
          y: metaItem.y
        };
        return idata;
      })
    };

    //
    // for (const metaItem of metaData.data) {
    //   metaItem.x = 'shih';
    // }

    console.log('1');
    console.log(series);

    const options = {
      chart: {
        height: 200,
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
      series: [
        series,
        {
          name: 'tuan 2',
          // x dùng để biểu hiện giá trị 1 ô hiện dc lượt
          // tslint:disable-next-line:max-line-length
          data: [{ x: '1', y: 0 }, { x: '2', y: 8 }, { x: '3', y: 0 }, { x: '4', y: 0}, { x: '5', y: 0}, { x: '6', y: 0}, { x: '7', y: 0}, { x: '8', y: 0}, { x: '9', y: 0}, { x: '10', y: 0}, { x: '11', y: 0}, { x: '12', y: 0}]
        },

        {
          name: 'tuan 3',
          data: this.generateData(12, {
            min: 0,
            max: 0
          })
        },
        {
          name: 'tuan 4',
          data: this.generateData(12, {
            min: 0,
            max: 0
          })
        }
      ],
      // set biểu đồ có 2 dòng
      xaxis: {
        categories: ['t1', 't2', 't3', 't4', 't5', 't6', 't7', 't8', 't9', 't10', 't11', 't12']
      },
      yaxis: {
        categories: ['Mon', 'Tus', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      title: {
        text: 'HeatMap Chart with Color Range'
      },

    };

    const chart = new ApexCharts(document.querySelector('#chart'), options);

    chart.render();

  }
}
