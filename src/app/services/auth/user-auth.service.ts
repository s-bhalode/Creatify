import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

  const url = 'http://localhost:3000/';

  const httpOptions = {
    headers : new HttpHeaders({'content-type' : 'application/json'})
  }

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor(private http : HttpClient) { }

  login(email : string, password : any) : Observable<any>{
    
    console.log("service  " + email + " " + password);

    return this.http.post(url + 'login', {
      email, password
    }, httpOptions);
  }

  
  registerUserData(username : string, email:string, password:any):Observable<any>{
    return this.http.post(url + 'register', {
      username,
      email,
      password
    }, httpOptions);
  }

}
