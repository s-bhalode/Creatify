import { Component, OnInit } from '@angular/core';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {RecruiterPost2Component} from '../recruiter-post2/recruiter-post2.component';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-recruiter-post1',
  templateUrl: './recruiter-post1.component.html',
  styleUrls: ['./recruiter-post1.component.css']
})
export class RecruiterPost1Component implements OnInit {

  constructor(private dialog : MatDialog) { }
  
  recruiterPostForm = new FormGroup({
    image : new FormControl(''),
  });

  ngOnInit(): void {
  }

  openPostDialog2(){
    this.dialog.open(RecruiterPost2Component, {disableClose : true});
  }
  getRecruiterPostData(data : any){
    console.log(data);
  }
  

}
