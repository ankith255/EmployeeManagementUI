import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class DataService {

  events: any[] = [
    {
      id: 1,
      start: "2024-08-02T09:15:00",
      end: "2024-08-02T11:00:00",
      text: 'Task 1',
      employee: "P1",
      barColor: "#6aa84f"
    },
    {
      id: 2,
      start: "2024-08-02T12:00:00",
      end: "2024-08-02T15:00:00",
      text: 'Task 2',
      employee: "P1",
      barColor: "#6aa84f"
    },
    {
      id: 3,
      start: "2024-08-05T10:00:00",
      end: "2024-08-05T12:00:00",
      text: 'Task 3',
      employee: "P1",
      barColor: "#cc0000"
    },
  ];

  employees: any[] = [
    {name: "Person 1", id: "P1"},
    {name: "Person 2", id: "P2"},
    {name: "Person 3", id: "P3"},
    {name: "Person 4", id: "P4"},
    {name: "Person 5", id: "P5"},
  ];

  constructor(private http: HttpClient) {
  }

  getEvents(from: Date, to: Date, employeeId: string): Observable<any[]> {

    const selected = this.events.filter(e => e.employee === employeeId && !(new Date(e.end) < from || new Date(e.start) > to));

    // simulating an HTTP request
    return new Observable(observer => {
      setTimeout(() => {
        observer.next(selected);
      }, 200);
    });

    // return this.http.get("/api/events?from=" + from.toString() + "&to=" + to.toString());
  }

  getEmployees(): Observable<any[]> {

    // simulating an HTTP request
    return new Observable(observer => {
      setTimeout(() => {
        observer.next(this.employees);
      }, 200);
    });

    // return this.http.get("/api/events?from=" + from.toString() + "&to=" + to.toString());
  }


}