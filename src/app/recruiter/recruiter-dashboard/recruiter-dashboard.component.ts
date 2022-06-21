import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
@Component({
  selector: 'app-recruiter-dashboard',
  templateUrl: './recruiter-dashboard.component.html',
  styleUrls: ['./recruiter-dashboard.component.css']
})
export class RecruiterDashboardComponent implements OnInit {

  content ?: string;
  constructor(private userService : UserService) { }

  ngOnInit(): void {
    this.userService.getRecruiter().subscribe(data => {
      this.content = data;
    },
    err => {
      this.content = JSON.parse(err.error).message;
    });
  }

}
