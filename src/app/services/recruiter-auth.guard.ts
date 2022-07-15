import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RecruiterAuthGuard implements CanActivateChild {
  
  constructor(private authService : AuthService) { }
 
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot){

      const loggedInUser = this.authService.getLoggedInUser();
      if(loggedInUser.role === 'recruiter'){
        return true;
      }else{
        return false;
      }
  }
  
}
