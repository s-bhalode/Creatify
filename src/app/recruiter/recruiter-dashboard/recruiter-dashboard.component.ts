import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recruiter-dashboard',
  templateUrl: './recruiter-dashboard.component.html',
  styleUrls: ['./recruiter-dashboard.component.css']
})
export class RecruiterDashboardComponent implements OnInit {

  constructor() { }

  jobs = ["person 1", "person 2 ", "person 3 ", "person 4 ", "person 5", "person 6"];

  ngOnInit(): void {
  }

}
