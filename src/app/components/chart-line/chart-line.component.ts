import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chart-line',
  templateUrl: './chart-line.component.html',
  styleUrls: ['./chart-line.component.scss'],
})
export class ChartLineComponent implements OnInit {
  @Input() dataChart: any;
  chartLineData: any;
  chartLineOptions: any;

  constructor() {
    this.chartLineOptions = {
      plugins: {
        legend: {
          labels: {
            color: '#000000',
          },
          position: 'top',
          align: 'end',
        },
      },
      scales: {
        x: {
          ticks: {
            color: '#809FB8',
            font: {
              size: 12,
            },
          },
          grid: {
            color: '#ebedef',
          },
        },
        y: {
          ticks: {
            color: '#809FB8',
            font: {
              size: 12,
            },
          },
          grid: {
            color: '#ebedef',
          },
          max: 250,
          stepSize: 5,
        },
      },
      responsive: true,
      maintainAspectRatio: false,
    };
  }

  ngOnInit(): void {
    this.chartLineData = {
      labels: this.dataChart.labels,
      datasets: this.dataChart.datasets,
    };
  }
}
