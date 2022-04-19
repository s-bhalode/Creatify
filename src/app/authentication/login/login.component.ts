import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  shouldAdd = false;
  shouldUp = false;

  constructor() { }

  ngOnInit(): void {
  }


  public signUpShow = false;
  public signInshow = false;
  public contShow = false;

  @ViewChild("#signup") up : any;
  @ViewChild("#signin") in : any;
  @ViewChild("#container") cont : any;
  
  signUpAddClass(){
    this.signUpShow = !this.signUpShow;

    if(this.signUpShow){
      this.up.nativeElement.classList.add("right-panel-active");
    }else{
      this.up.nativeElement.classList.remove("right-panel-active");
    }
  }
  signInAddClass(){
    this.signInshow = !this.signInshow;

    if(this.signInshow){
      this.up.nativeElement.classList.add("right-panel-active");
    }else{
      this.up.nativeElement.classList.remove("right-panel-active");
    }
  }
  contAddClass(){
    this.contShow = !this.contShow

    if(this.contShow){
      this.up.nativeElement.classList.add("right-panel-active");
    }else{
      this.up.nativeElement.classList.remove("right-panel-active");
    }
  }

}
