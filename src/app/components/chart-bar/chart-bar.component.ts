import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart-bar',
  templateUrl: './chart-bar.component.html',
})
export class ChartBarComponent implements OnInit {
  @Input() dataChart: any;
  chartBarData: any;
  chartBarOptions: any;

  constructor() {
    this.chartBarOptions = {
      plugins: {
        legend: {
          display: false,
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
            color: '#E2E9EF',
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
            color: '#E2E9EF',
          },
          max: 30,
        },
      },
      responsive: true,
      maintainAspectRatio: false,
    };
  }

  ngOnInit(): void {
    this.chartBarData = {
      labels: this.dataChart.labels,
      datasets: this.dataChart.datasets,
    };
  }
}
