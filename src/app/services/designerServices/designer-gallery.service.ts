import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class DesignerGalleryService {
  
  API_URL = "http://localhost:3000/designer/designer-post";

  constructor(private http : HttpClient) { }

  uploadPost(file : File, caption : any) : Observable<HttpEvent<any>>{
    const formData : FormData = new FormData();
    formData.append('file', file);
    formData.append('caption', caption);
    const req = new HttpRequest('POST', `${this.API_URL}/upload`, formData, {
      reportProgress : true,
      responseType : 'json'
    });
    return this.http.request(req);
  }

  getFiles() : Observable<any>{
    return this.http.get(`${this.API_URL}/posts`);
  }
  
}
