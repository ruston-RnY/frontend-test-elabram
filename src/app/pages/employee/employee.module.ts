import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeStatsComponent } from './employee-stats/employee-stats.component';

import { FormsModule } from '@angular/forms';
import { SelectButtonModule } from 'primeng/selectbutton';
import { CalendarModule } from 'primeng/calendar';
import { ComponentsModule } from 'src/app/components/components.module';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [EmployeeStatsComponent],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    SelectButtonModule,
    CalendarModule,
    FormsModule,
    ComponentsModule,
    TableModule,
  ],
})
export class EmployeeModule {}
