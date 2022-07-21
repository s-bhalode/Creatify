import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-designer-activity',
  templateUrl: './designer-activity.component.html',
  styleUrls: ['./designer-activity.component.css']
})
export class DesignerActivityComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  activities = [1, 2, 3, 4, 5, 6, 7];
  views = [1, 2, 3, 4, 5, 6, 7];
}
