import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttendanceManagementComponent } from './attendance-management.component';
import { TimesheetComponent } from './timesheet/timesheet.component';

const routes: Routes = [
  { path: "", component: AttendanceManagementComponent ,
  },
  {
        path:'timesheet', component: TimesheetComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AttendanceManagementRoutingModule { }
