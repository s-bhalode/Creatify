import { Component, OnInit } from '@angular/core';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {RecruiterPost2Component} from '../recruiter-post2/recruiter-post2.component';

@Component({
  selector: 'app-recruiter-post1',
  templateUrl: './recruiter-post1.component.html',
  styleUrls: ['./recruiter-post1.component.css']
})
export class RecruiterPost1Component implements OnInit {

  constructor(private activeModal : NgbActiveModal,
              public modalService : NgbModal  ) { }

  ngOnInit(): void {
  }

}
