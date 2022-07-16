import { Component, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormGroup, FormControl } from '@angular/forms';
import {RecruiterGalleryService} from '../../services/recruiter-gallery.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-recruiter-post',
  templateUrl: './recruiter-post.component.html',
  styleUrls: ['./recruiter-post.component.css']
})
export class RecruiterPostComponent implements OnInit {
 
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

  recruiterPostImageForm = new FormGroup({
    image : new FormControl(''),
  });

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
