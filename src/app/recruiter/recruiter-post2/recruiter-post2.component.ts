import { Component, OnInit } from '@angular/core';
import {RecruiterPost1Component} from '../recruiter-post1/recruiter-post1.component';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormGroup, FormControl } from '@angular/forms';
import {RecruiterGalleryService} from '../../services/recruiter-gallery.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-recruiter-post2',
  templateUrl: './recruiter-post2.component.html',
  styleUrls: ['./recruiter-post2.component.css']
})
export class RecruiterPost2Component implements OnInit {

  imageFile : File | undefined;
  isLoadingResult = false;

  constructor(private dialog : MatDialog,
              private recruiterGallery : RecruiterGalleryService,
              private router : Router) { }

  ngOnInit(): void {
  }

  jobDetailsForm = new FormGroup({
    imageFile : new FormControl(''),
    companyName : new FormControl(''),
    profileDesignation : new FormControl(''),
    jobType : new FormControl(''),
    location : new FormControl(''),
    skillsRequirement : new FormControl('')
  });

  openPostDialog1(){
    this.dialog.open(RecruiterPost1Component);
  }

  onSubmit(data : any){
    this.isLoadingResult  = true;
    this.recruiterGallery.addGallery(this.jobDetailsForm.value, this.jobDetailsForm.get('imageFile')?.value._files[0])
      .subscribe((res : any) => {
        this.isLoadingResult = false;
        if(res.body){
          this.router.navigate(['recruiter/recruiterProfile', res.body.id]);
        }
      },(err : any) => {
        console.log(err);
        this.isLoadingResult = false;
      });
  }

}
