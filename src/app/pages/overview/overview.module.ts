import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OverviewRoutingModule } from './overview-routing.module';
import { ListOverviewComponent } from './list-overview/list-overview.component';

import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ListOverviewComponent],
  imports: [CommonModule, OverviewRoutingModule, FormsModule, CalendarModule],
})
export class OverviewModule {}
