import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserProfileSettingsService {
  url= "http://localhost:3000/users/";

  constructor(private http:HttpClient) { }
 
   usersettings(){
    return this.http.get(this.url);
   }
   fetchuserData(){
    return this.http.get(this.url + ":id" + "/profile-settings");
   }
   updateuserData(data:any ,id : any){
    return this.http.put(this.url+"/"+id,data);
   }
  
}
