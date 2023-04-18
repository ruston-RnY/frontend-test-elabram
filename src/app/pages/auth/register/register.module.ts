import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterSuccessComponent } from './register-success/register-success.component';
import { RegisterComponent } from './register.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RegisterComponent,
    RegisterSuccessComponent,
    RegisterFormComponent,
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    ComponentsModule,
    ButtonModule,
    InputTextModule,
    CheckboxModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class RegisterModule {}
