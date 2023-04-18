import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/shared/service/global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  public isShowPassword: boolean = false;
  public loginForm!: FormGroup;
  public errorCredential: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private globalService: GlobalService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      rememberMe: [''],
    });
  }

  ngOnInit(): void {}

  showPassword() {
    this.isShowPassword = !this.isShowPassword;
  }

  submit() {
    this.loginForm.markAllAsTouched();

    const data = this.globalService.getDataUser();

    if (this.loginForm.valid) {
      if (
        this.loginForm.value.email != data?.email ||
        this.loginForm.value.password != data?.password
      ) {
        this.errorCredential = true;
      } else {
        this.errorCredential = false;
        sessionStorage.setItem('isLogin', JSON.stringify(this.loginForm.value));
        this.router.navigate(['overview']);
      }
    }
  }
}
