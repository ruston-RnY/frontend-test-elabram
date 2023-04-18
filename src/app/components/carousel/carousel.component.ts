import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
})
export class CarouselComponent implements OnInit {
  @Input() dataSlider: any;
  @Input() sliderDuration!: number;
  count: number = 0;
  step: number = 1;
  interval: any;

  constructor() {}

  ngOnInit(): void {
    this.startInterval();
  }

  runCount() {
    this.count = this.count + 1;

    if (this.count == (this.sliderDuration ? this.sliderDuration : 5)) {
      this.count = 0;
      clearInterval(this.interval);
      this.startInterval();

      if (this.step < this.dataSlider.length) {
        this.step++;
      } else {
        this.step = 1;
      }
    }
  }

  startInterval() {
    this.interval = setInterval(() => this.runCount(), 1000);
  }

  changeStep(idx: number) {
    this.step = idx;
  }
}
