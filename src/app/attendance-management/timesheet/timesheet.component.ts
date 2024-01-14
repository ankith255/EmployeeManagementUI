import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { SchedulerComponent } from '../scheduler/scheduler.component';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.scss']
})
export class TimesheetComponent implements AfterViewInit {

  @ViewChild('timesheet')
  timesheet!: SchedulerComponent;

  employees: any[] = [];

  employee: any;


  constructor(private ds: DataService) {
  }

  employeeSelected($event: Event) {
    

  }

  ngAfterViewInit(): void {

    
  }

}