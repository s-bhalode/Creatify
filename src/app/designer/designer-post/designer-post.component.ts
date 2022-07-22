import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {DesignerGalleryService} from '../../services/designerServices/designer-gallery.service';

@Component({
  selector: 'app-designer-post',
  templateUrl: './designer-post.component.html',
  styleUrls: ['./designer-post.component.css']
})
export class DesignerPostComponent implements OnInit {

  selectedFile? : FileList;
  currentFile?: File;
  selectedImage! : string;

  constructor(private dialog : MatDialog,
              private router : Router,
              private designerGalleryService : DesignerGalleryService) { }

  ngOnInit(): void {
    
  }

  designerPostForm = new FormGroup({
    caption : new FormControl(''),
    image : new FormControl(''),
  })

  designerPostImageForm = new FormGroup({
    postImage : new FormControl('', [Validators.required])
  })

  get postImage(){
    return this.designerPostImageForm.controls;
  }

  pickedImage(event : any){
      this.selectedFile = event.target.files ;
      if(this.selectedFile){
        const file : File | null = this.selectedFile.item(0);

        if(file){
          this.currentFile = file;
          this.designerPostForm.patchValue({image : this.currentFile});
          this.designerPostForm.get('image')?.updateValueAndValidity();
          const reader = new FileReader();
          reader.onload = () => {
            this.selectedImage = reader.result as string;
          };
          reader.readAsDataURL(this.currentFile);
        }
      }   
  }

  onSubmit(formObj : any){

  }



}
