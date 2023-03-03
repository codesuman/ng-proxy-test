import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: 
  `<div>
    <p>Hello World...</p>
    <li *ngFor="let item of tasks">{{item}}</li>
  </div>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'proxy-test';
  tasks: any = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get('api/tasks').subscribe(res => this.tasks = res);
  }
}
