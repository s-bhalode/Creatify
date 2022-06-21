import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  content ?: string;
  constructor(private userService : UserService) { }

  ngOnInit(): void {
    this.userService.getAdmin().subscribe(data => {
      this.content = data;
    },
    err => {
      this.content = JSON.parse(err.error).message;
    });
  }

}
