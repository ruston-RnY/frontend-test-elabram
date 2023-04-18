import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/shared/service/global.service';
import { ConfirmPasswordValidator } from 'src/app/shared/utils/confirm-password-validator';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
})
export class RegisterFormComponent implements OnInit {
  public isShowPassword: boolean = false;
  public isShowConfirmPassword: boolean = false;
  public registerForm!: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private globalService: GlobalService
  ) {
    this.registerForm = this.fb.group(
      {
        companyName: ['', Validators.required],
        fullName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        countryCode: [''],
        phoneNumber: [''],
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required],
        newsLetter: [''],
        termCondition: ['', Validators.required],
      },
      {
        validator: ConfirmPasswordValidator('password', 'confirmPassword'),
      }
    );
  }

  ngOnInit(): void {}

  showPassword(type: string) {
    if (type == 'password') {
      this.isShowPassword = !this.isShowPassword;
    } else {
      this.isShowConfirmPassword = !this.isShowConfirmPassword;
    }
  }

  submit() {
    this.registerForm.markAllAsTouched();

    if (this.registerForm.valid) {
      this.globalService.setDataUser(this.registerForm.value);
      this.router.navigate(['register/success']);
    }
  }
}
