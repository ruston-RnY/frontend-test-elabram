import { Component, OnInit } from '@angular/core';
import * as dataRegisterSuccess from '../../../../shared/json/dataRegisterSuccess.json';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-success',
  templateUrl: './register-success.component.html',
})
export class RegisterSuccessComponent implements OnInit {
  dataRegisterSuccess = dataRegisterSuccess;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  login() {
    this.router.navigate(['/login']);
  }
}
