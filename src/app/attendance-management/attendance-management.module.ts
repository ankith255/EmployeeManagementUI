import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttendanceManagementRoutingModule } from './attendance-management-routing.module';
import { AttendanceManagementComponent } from './attendance-management.component';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SchedulerComponent } from './scheduler/scheduler.component';


@NgModule({
  declarations: [
    AttendanceManagementComponent,
    SchedulerComponent,
    TimesheetComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    AttendanceManagementRoutingModule
  ]
})
export class AttendanceManagementModule { }
