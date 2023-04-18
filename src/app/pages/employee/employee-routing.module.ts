import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeStatsComponent } from './employee-stats/employee-stats.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeeStatsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeRoutingModule {}
