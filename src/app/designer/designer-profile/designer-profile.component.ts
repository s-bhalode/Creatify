import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from '../../services/authServices/token-storage.service';

@Component({
  selector: 'app-designer-profile',
  templateUrl: './designer-profile.component.html',
  styleUrls: ['./designer-profile.component.css']
})
export class DesignerProfileComponent implements OnInit {

  currentUser : any;

  constructor(private token : TokenStorageService) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
  }

}
