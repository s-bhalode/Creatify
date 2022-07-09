import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:3000/api/test/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }

  getPublicContent() : Observable<any>{
    return this.http.get(API_URL + 'all');
  }

  getDesigner() : Observable<any>{
    return this.http.get(API_URL + 'designer');
  }

  getRecruiter() : Observable<any>{
    return this.http.get(API_URL + 'recruiter');
  }

  getAdmin() : Observable<any>{
    return this.http.get(API_URL + 'admin');
  }

}
