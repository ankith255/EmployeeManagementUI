import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttendanceManagementRoutingModule } from './attendance-management-routing.module';
import { AttendanceManagementComponent } from './attendance-management.component';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { SchedulerComponentComponent } from './scheduler-component/scheduler-component.component';
import { SchedulerComponent } from './scheduler/scheduler.component';


@NgModule({
  declarations: [
    AttendanceManagementComponent,
    TimesheetComponent,
    SchedulerComponentComponent,
    SchedulerComponent
  ],
  imports: [
    CommonModule,
    AttendanceManagementRoutingModule
  ]
})
export class AttendanceManagementModule { }
