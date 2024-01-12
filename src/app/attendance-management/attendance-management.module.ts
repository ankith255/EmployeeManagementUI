import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttendanceManagementRoutingModule } from './attendance-management-routing.module';
import { AttendanceManagementComponent } from './attendance-management.component';
import { TimesheetComponent } from './timesheet/timesheet.component';


@NgModule({
  declarations: [
    AttendanceManagementComponent,
    TimesheetComponent
  ],
  imports: [
    CommonModule,
    AttendanceManagementRoutingModule
  ]
})
export class AttendanceManagementModule { }
