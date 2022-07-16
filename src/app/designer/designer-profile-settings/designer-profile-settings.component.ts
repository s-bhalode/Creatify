import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators,FormBuilder  } from '@angular/forms';
import { UserProfileSettingsService } from 'src/app/services/user-profile-settings.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TokenStorageService } from 'src/app/services/token-storage.service';



@Component({
  selector: 'app-designer-profile-settings',
  templateUrl: './designer-profile-settings.component.html',
  styleUrls: ['./designer-profile-settings.component.css']
})
export class DesignerProfileSettingsComponent implements OnInit {
    designer : any;
    userId: any; 
    user : any;

  constructor(private userData : UserProfileSettingsService,
              private tokenService : TokenStorageService) {
                
    const isLoggedIn = tokenService.getToken();  

    if(isLoggedIn){
      this.user = tokenService.getUser();
      this.userId = this.user.id;
      // console.log('user id : ' + this.userId);
      userData.fetchUserData(this.userId).subscribe(data => {
        console.log(data);
        this.designer =data;
      },
      err => {
        console.log(err);
      })
        

    }
   
    
    
  }
  // updateUserData(){
  //   console.log(this.userProfileData.value);
  // }

  ngOnInit(): void {
  }
 

  userProfileData = new FormGroup({
    name : new FormControl(),
    bio : new FormControl(),
    skills : new FormControl(),
    email : new FormControl(),
    portfolio_url : new FormControl()
   });

   
   getUserFormData(data : any){
    console.log(this.userId);
    console.log(this.userProfileData.value);
    const {username, email, role, bio ,skills , portfolio_url}=data;
    // console.log(this.userProfileData.value);
    this.userData.updateUserData(data,this.userId).subscribe(result => {
      console.log(result);
    },
    err => {
      console.log(err);
    })


  }

 
    // getUserFormData(data : any){
    //   const {username, email, role, bio ,skills , portfolio_url}=data;
    //   this.userData.fetchUserData(this.userId).subscribe(result => {
    //     console.log(result);
    //   },
    //   err => {
    //     console.log(err);
    //   })
    // }







  }
 
 