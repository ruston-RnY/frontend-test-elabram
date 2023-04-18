import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AuthGuard } from './shared/guard/auth/auth.guard';
import { LoggedGuard } from './shared/guard/logged/logged.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [LoggedGuard],
    loadChildren: () =>
      import('./pages/auth/register/register.module').then(
        (m) => m.RegisterModule
      ),
    pathMatch: 'full',
  },
  {
    path: 'register',
    canActivate: [LoggedGuard],
    loadChildren: () =>
      import('./pages/auth/register/register.module').then(
        (m) => m.RegisterModule
      ),
  },
  {
    path: 'login',
    canActivate: [LoggedGuard],
    component: LoginComponent,
  },
  {
    path: 'overview',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./pages/overview/overview.module').then((m) => m.OverviewModule),
  },
  {
    path: 'employee',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./pages/employee/employee.module').then((m) => m.EmployeeModule),
  },
  { path: '**', redirectTo: '/not-found' },
  { path: 'not-found', component: NotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
