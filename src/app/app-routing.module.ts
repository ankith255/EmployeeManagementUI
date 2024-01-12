import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LandingPageModule } from './landing-page/landing-page.module';
import { HomeModule } from './home/home.module';

const routes: Routes = [
  {
      path: 'login',
      component: LoginComponent
  },
  {
      path: 'landing-page',
      loadChildren: () => import('./landing-page/landing-page.module').then(m => m.LandingPageModule)
  },
  {
      path: 'home',
      loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'timesheet',
    loadChildren: () => import('./attendance-management/attendance-management.module').then(m => m.AttendanceManagementModule)
  },
  {
    path: '**',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
