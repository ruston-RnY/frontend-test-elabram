import { Component, OnInit } from '@angular/core';
import * as dataSlider from '../../../shared/json/dataSlider.json';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {
  dataSlider = dataSlider;

  constructor() {}

  ngOnInit(): void {}
}
