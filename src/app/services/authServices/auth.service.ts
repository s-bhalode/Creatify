import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../authServices/token-storage.service';

const AUTH_API = 'http://localhost:3000/api/auth/';

const httpOptions : object = {
  Headers : new HttpHeaders({'content-Type' : 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private redirectUrl : string = '/';
  private loginUrl : string = '/login';
  private isLoggedIn : boolean = false;
  private loggedInUser : any;
  private currentUrl : string = '/';

  constructor(private http : HttpClient,
              private tokenStorageService : TokenStorageService) { }
  
  login(email : string, password : string) : Observable<any>{
    return this.http.post(AUTH_API + 'signin', {
      email,
      password
    }, httpOptions);
  }

  register(username : string, email : string, password : string, role : string) : Observable<any>{
    return this.http.post(AUTH_API + 'signup', {
      username,
      email,
      password,
      role
    }, httpOptions);
  }

  isUserLoggedIn() : boolean {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    return this.isLoggedIn;
  }

  getRedirectUrl() : string {
    return this.redirectUrl;
  }

  setRedirectUrl(url : string) : void {
    this.redirectUrl = url;
  }

  getLoginUrl() : string {
    return this.loginUrl;
  }

  getCurrentUrl() : string {
    this.currentUrl = this.redirectUrl;
    return this.currentUrl;
  }

  getLoggedInUser(){
    if(this.isLoggedIn){
      this.loggedInUser = this.tokenStorageService.getUser();
    }
    return this.loggedInUser;
  }

  logoutUser() : void {
    this.isLoggedIn = false;
  }

}
