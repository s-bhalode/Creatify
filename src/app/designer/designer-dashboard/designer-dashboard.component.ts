import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/commonUserServices/user.service';

@Component({
  selector: 'app-designer-dashboard',
  templateUrl: './designer-dashboard.component.html',
  styleUrls: ['./designer-dashboard.component.css']
})
export class DesignerDashboardComponent implements OnInit {

  content ?: string;
  constructor(private userService : UserService) { }

  ngOnInit(): void {
    this.userService.getDesigner().subscribe(data => {
      this.content = data;
    },
    err => {
      this.content = JSON.parse(err.error).message;
    })
  }

}
