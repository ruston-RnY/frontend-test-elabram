import { Component, OnInit } from '@angular/core';
import * as dataOverview from '../../../shared/json/dataOverview.json';
import { DatePipe } from '@angular/common';
import { GlobalService } from 'src/app/shared/service/global.service';

@Component({
  selector: 'app-list-overview',
  templateUrl: './list-overview.component.html',
  styleUrls: ['./list-overview.component.scss'],
  providers: [DatePipe],
})
export class ListOverviewComponent implements OnInit {
  public datePeriode = new Date();
  public dataOverview = dataOverview;
  public selectedDataSummary: any;
  public dataUser: any;

  constructor(
    private datePipe: DatePipe,
    private globalService: GlobalService
  ) {}

  ngOnInit(): void {
    const selectedPeriode = this.datePipe.transform(
      this.datePeriode,
      'MM-yyyy'
    );

    this.getSelectedDataSummary(selectedPeriode);
    this.dataUser = this.globalService.getDataUser();
  }

  onChangeDate() {
    const selectedPeriode = this.datePipe.transform(
      this.datePeriode,
      'MM-yyyy'
    );
    this.getSelectedDataSummary(selectedPeriode);
  }

  getSelectedDataSummary(periode: any) {
    this.selectedDataSummary = this.dataOverview.summary.find(
      (item: any) => item.periode == periode
    );
  }
}
