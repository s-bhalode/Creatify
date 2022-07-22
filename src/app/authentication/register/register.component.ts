import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/authServices/auth.service';
import {TokenStorageService} from '../../services/authServices/token-storage.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  shouldAdd : boolean = true;
  isLoggedIn : boolean = false;
  isSuccessful : boolean = false;
  isRegisterFailed : boolean = false;
  isLoggedInFailed : boolean = false;
  showLoginForm : boolean = true;
  errorMessage = '';
  roles : string[] = [];
  roleDashboard : any;

  constructor(private authService : AuthService,
              private tokenStorage : TokenStorageService) { }


  ngOnInit(): void {
    console.log(this.signUp.valueChanges.subscribe);
    if(this.tokenStorage.getToken()){
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().role;
      console.log(this.roles);
      this.roleDashboard = this.roles + "-dashboard";
    }
  }

  signUp = new FormGroup({
    username : new FormControl('', [Validators.required]),
    email : new FormControl('', [Validators.required, Validators.email]),
    password : new FormControl('', [Validators.required, Validators.minLength(8)]),
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

  getUserLoginFormData(data : any){
    const {email, password} = data;

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
