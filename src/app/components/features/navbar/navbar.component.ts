import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {RecruiterPost1Component} from '../../../recruiter/recruiter-post1/recruiter-post1.component';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public modalService : NgbModal) { }

  ngOnInit(): void {
  }

}
