import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { ChartBarComponent } from './chart-bar/chart-bar.component';
import { ChartModule } from 'primeng/chart';
import { ChartPieComponent } from './chart-pie/chart-pie.component';
import { ChartLineComponent } from './chart-line/chart-line.component';

@NgModule({
  declarations: [
    CarouselComponent,
    HeaderComponent,
    ChartBarComponent,
    ChartPieComponent,
    ChartLineComponent,
  ],
  imports: [CommonModule, RouterModule, ChartModule],
  exports: [
    CarouselComponent,
    HeaderComponent,
    ChartBarComponent,
    ChartPieComponent,
    ChartLineComponent,
  ],
})
export class ComponentsModule {}
