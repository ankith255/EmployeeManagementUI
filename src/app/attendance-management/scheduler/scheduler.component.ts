import {Component, ViewChild, AfterViewInit} from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'scheduler-component',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.scss']
})
export class SchedulerComponent implements AfterViewInit {

  @ViewChild('scheduler')
  scheduler!: SchedulerComponent;

  
   
  constructor(private ds: DataService) {
  }

  ngAfterViewInit(): void {
    //this.ds.getResources().subscribe(result => this.config.resources = result);
  }

}