import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttendanceManagementRoutingModule } from './attendance-management-routing.module';
import { AttendanceManagementComponent } from './attendance-management.component';


@NgModule({
  declarations: [
    AttendanceManagementComponent
  ],
  imports: [
    CommonModule,
    AttendanceManagementRoutingModule
  ]
})
export class AttendanceManagementModule { }
