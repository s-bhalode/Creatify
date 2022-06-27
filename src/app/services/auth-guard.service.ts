import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import {AuthService} from './auth.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate, CanActivateChild{

  constructor(private authService : AuthService,
              private router : Router) { }
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url : string = state.url;
    console.log('Url : ' + url);

  //   if(this.authService.login()){
  //     return true;
  //   }
  //   this.authService.setRedirectUrl(url);
  //   this.router.navigate([this.authService.getLoginUrl() ]);

    return false;
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // let loggedInUser = this.authService.getLoggedInUser();

  //   if(loggedInUser.role === 'admin'){
  //     return true;
  //   }else if(loggedInUser.role === 'designer'){
  //     return true;
  //   }else if(loggedInUser.role === 'recruiter'){
  //     return true;
  //   }else{
  //     console.log('unauthorized to open link : ' + state.url);
      return false;
    }

  }

// }
