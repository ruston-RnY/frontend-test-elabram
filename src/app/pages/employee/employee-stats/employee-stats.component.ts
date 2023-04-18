import { Component, OnInit } from '@angular/core';
import * as dataEmployee from '../../../shared/json/dataEmployee.json';

@Component({
  selector: 'app-employee-stats',
  templateUrl: './employee-stats.component.html',
  styleUrls: ['./employee-stats.component.scss'],
})
export class EmployeeStatsComponent implements OnInit {
  public dataEmployee = dataEmployee;
  public filterPeriodeOptions!: any[];
  public filterValue: string = 'yearly';
  public monthPeriode = new Date();
  public yearPeriode = new Date();
  public recaps: any;

  constructor() {
    this.filterPeriodeOptions = [
      { label: 'Monthly', value: 'monthly' },
      { label: 'Yearly', value: 'yearly' },
    ];
  }

  ngOnInit(): void {
    this.recaps = this.dataEmployee.data[0].leave_recap;
  }

  onChangePeriode(type: string) {
    if (type == 'monthly') {
      console.log('month', this.monthPeriode);
    } else {
      console.log('year', this.yearPeriode);
    }
  }
}
