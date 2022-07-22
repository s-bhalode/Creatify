import { Injectable } from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {HttpClient, HttpHeaders, HttpErrorResponse, HttpParams, HttpRequest} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {Gallery} from '../../components/features/gallery/recruiterGallery';


const API_URL = 'http://localhost:3000/recruiter/gallery';

@Injectable({
  providedIn: 'root'
})
export class RecruiterGalleryService {

  constructor(private http : HttpClient) { }

  private handleError(error : HttpErrorResponse) : any{
    if(error.error instanceof ErrorEvent){
      console.error('An error occurred : ', error.error.message);
    }else{
      console.error(`Backend returned code ${error.status}, ` + `body was : ${error.error} `);
    }

    return throwError(
      'Something bad happened; Please try again later.'
    );
  }
  
  getGalleryById(id : string) : Observable<any>{
    const url = ` ${API_URL} / ${id}`;
    return this.http.get<Gallery>(url).pipe(
      catchError(this.handleError)
    );
  }

  addGallery(gallery : Gallery, file : File){
    const formData = new FormData();
    formData.append('file', file);
    formData.append('companyName', gallery.companyName);
    formData.append('profileDesignation', gallery.profileDesignation);
    formData.append('location', gallery.location);
    formData.append('jobType', gallery.jobType);
    formData.append('skillsReq', gallery.skillsReq);
    const header = new HttpHeaders();
    const params = new HttpParams();

    const options = {
      params,
      reportProgress : true,
      headers : header
    };
    const req = new HttpRequest('POST', API_URL, formData, options);

    return this.http.request(req);
  }

}
