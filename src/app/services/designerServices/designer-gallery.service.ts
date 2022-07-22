import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class DesignerGalleryService {
  
  API_URL = "http://localhost:3000/designer/designer-post/";

  constructor(private http : HttpClient) { }

  

  
}
