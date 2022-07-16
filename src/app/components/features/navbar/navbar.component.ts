import { Component, OnInit } from '@angular/core';
import {RecruiterPostComponent} from '../../../recruiter/recruiter-post/recruiter-post.component';
import {TokenStorageService} from '../../../services/token-storage.service';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  role : string | undefined ;
  isLoggedIn : boolean = false;
  showAdminDashboard : boolean = false;
  showDesignerDashboard : boolean = false;
  showRecruiterDashboard : boolean = false;
  username ?: string;
  id : any;

  constructor(private tokenStorageservice : TokenStorageService,
              public dialog : MatDialog) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageservice.getToken();
    if(this.isLoggedIn){
      const user = this.tokenStorageservice.getUser();
      console.warn(user);
      console.warn(user.role);
      this.role = user.role;
      this.id = user.id;
      // this.showAdminDashboard = this.role.includes('admin');
      
      // this.showDesignerDashboard = this.role.includes('designer');
      // this.showRecruiterDashboard = this.role.includes('recruiter');
      this.username = user.username;
      
      if(this.role === "designer"){
          this.showAdminDashboard = false;
          this.showDesignerDashboard = true;
          this.showRecruiterDashboard = false;
          // console.warn("admin dashboard : " +this.showAdminDashboard);
          // console.warn("designer dashboard : " +this.showDesignerDashboard);
          // console.warn("recruiter dashboard : " +this.showRecruiterDashboard);
      }else if(this.role === "recruiter" ){
          this.showAdminDashboard = false;
          this.showDesignerDashboard = false;
          this.showRecruiterDashboard = true;
      }else if(this.role === "admin"){
          this.showAdminDashboard = true;
          this.showDesignerDashboard = false;
          this.showRecruiterDashboard = false;
      }
    }
  }
  logout() : void {
    this.tokenStorageservice.logOut();
    window.location.reload();
  }
  openPostDialog(){
    this.dialog.open(RecruiterPostComponent, {disableClose : true });
  }
  

}
