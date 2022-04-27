import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {UserAuthService} from '../../services/auth/user-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  shouldAdd = false;

  constructor(private userData : UserAuthService) { }

  ngOnInit(): void {  
    console.log(this.signUp.valueChanges.subscribe);
  }

  signUp = new FormGroup({
    username : new FormControl('', [Validators.required]),
    email : new FormControl('', [Validators.required, Validators.email]),
    password : new FormControl('', [Validators.required, Validators.minLength(8)])
  })

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
    this.userData.login(email, password).subscribe(result => {
      console.log(result);
    },
    err => {
      console.log(err);
    })
  }

  getUserRegisterFormData(data : any){
   const {username, email, password} = data;
    this.userData.registerUserData(username, email, password).subscribe(
      data => {
        console.log(data);
      },
      err => {
        console.log(err);
      }
    )

  }

}
