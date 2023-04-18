import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chart-pie',
  templateUrl: './chart-pie.component.html',
  styleUrls: ['./chart-pie.component.scss'],
})
export class ChartPieComponent implements OnInit {
  @Input() dataChart: any;
  chartPieData: any;
  chartPieOptions: any;

  constructor() {
    this.chartPieOptions = {
      plugins: {
        legend: {
          labels: {
            color: '#495057',
            paddingTop: 16,
          },
          position: 'bottom',
        },
      },
    };
  }

  ngOnInit(): void {
    this.chartPieData = {
      labels: this.dataChart.labels,
      datasets: this.dataChart.datasets,
    };
  }
}
