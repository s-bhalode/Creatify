import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
// import {UserAuthService} from '../../services/auth/user-auth.service';
import {TokenStorageService} from '../../services/token-storage.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  shouldAdd : boolean = false;
  isLoggedIn : boolean = false;
  isSuccessful : boolean = false;
  isRegisterFailed : boolean = false;
  isLoggedInFailed : boolean = false;
  showLoginForm : boolean = true;
  errorMessage = '';
  roles : string[] = [];

  constructor(private authService : AuthService,
              private tokenStorage : TokenStorageService) { }

  ngOnInit(): void {  
    console.log(this.signUp.valueChanges.subscribe);
    if(this.tokenStorage.getToken()){
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().role;
      console.log(this.roles);
    }
  }

  signUp = new FormGroup({
    username : new FormControl('', [Validators.required]),
    email : new FormControl('', [Validators.required, Validators.email]),
    password : new FormControl('', [Validators.required, Validators.minLength(8)]),
    // role : this.userRole 
    role : new FormControl('', [Validators.required])
  });

  signIn = new FormGroup({
    email : new FormControl('', [Validators.required, Validators.email]),
    password : new FormControl('', [Validators.required, Validators.minLength(8)])
  })

  get signUpForm(){
    return this.signUp.controls;
  }

  get signInForm(){
    return this.signIn.controls;
  }


  // get userRole() : FormArray{
  //   return this.signUp.get('role') as FormArray;
  // }

  getUserLoginFormData(data : any){
    const {email, password} = data;
    // this.userData.login(email, password).subscribe(result => {
    //   console.log(result);
    //   this.isLoggedIn = true;
    // },
    // err => {
    //   console.log(err);
    //   this.isLoggedIn = false;
    // })
    // console.log(`value of userdata ${this.isLoggedIn}`);


    this.authService.login(email, password).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);
        this.isLoggedInFailed = false;
        this.isLoggedIn = true;
        this.showLoginForm = false;
        this.roles = this.tokenStorage.getUser().role;
        this.reloadPage();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoggedInFailed = true;
      });
    }

    reloadPage() : void{
      window.location.reload();
    }

  getUserRegisterFormData(data : any){
   const {username, email, password, role} = data;
   console.log(data);
    // this.userData.registerUserData(username, email, password, role).subscribe(
    //   data => {
    //     console.log(data);
    //   },
    //   err => {
    //     console.log(err);
    //   }
    // )

    this.authService.register(username, email, password, role).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.showLoginForm = false;
        this.isRegisterFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.showLoginForm = false;
        this.isRegisterFailed = true;
      }
    );

  }

}
