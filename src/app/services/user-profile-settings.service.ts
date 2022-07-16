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
   fetchUserData(id :any){
    return this.http.get(this.url + id + "/profile-settings");
   }
   updateUserData(data:any ,id : any){
    console.log(data);
    return this.http.put(this.url+id+"/profile-settings",data);
   }
  
}
