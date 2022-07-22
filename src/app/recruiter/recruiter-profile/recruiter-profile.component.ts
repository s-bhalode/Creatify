import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RecruiterGalleryService} from '../../services/recruiterServices/recruiter-gallery.service';
import {Gallery} from '../../components/features/gallery/recruiterGallery';

@Component({
  selector: 'app-recruiter-profile',
  templateUrl: './recruiter-profile.component.html',
  styleUrls: ['./recruiter-profile.component.css']
})


export class RecruiterProfileComponent implements OnInit {

  gallery : Gallery = {
    companyName : '',
    postImageUrl : '',
    profileDesignation : '',
    location : '',
    jobType : '',
    skillsReq : '',
    uploaded : null
  };
  isLoadingResults = true;

  constructor(private route : ActivatedRoute,
              private galleryService : RecruiterGalleryService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(id){
      this.getGalleryDetails(id);
    }
  }

  getGalleryDetails(id : string) : void {
    
  }

}
