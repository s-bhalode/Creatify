import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators,FormBuilder  } from '@angular/forms';
import { UserProfileSettingsService } from 'src/app/services/user-profile-settings.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-designer-profile-settings',
  templateUrl: './designer-profile-settings.component.html',
  styleUrls: ['./designer-profile-settings.component.css']
})
export class DesignerProfileSettingsComponent implements OnInit {
    designer : any;
  
  constructor(private userData : UserProfileSettingsService) { 
    userData.fetchuserData().subscribe((data) => {
      console.log(data);
      this.designer = data;
    })
  }

  ngOnInit(): void {
  }


  // EditProfileData = new FormGroup({
  //   Name: new FormControl('Hardik'),
  //   Bio: new FormControl('hii !!I am Hardik panwar'),
  //   Skills: new FormControl('My skill is to make everyone happy '),
  //   Contact: new FormControl('_.hardikkk._12'),
  //   Portfolio : new FormControl('https://linkedin')
  //  });
   
   loadApiData(){
      
    }
    // getUserFormData(data:any){
    //   console.log(data);

    // }
    getUserFormData(data : any){
      const {username, email, role, bio ,skills , portfolio_url}=data;
      this.userData.fetchuserData().subscribe(result => {
        console.log(result);
      },
      err => {
        console.log(err);
      })
    }
  }
  // updateuserData(data :any){

  // }
