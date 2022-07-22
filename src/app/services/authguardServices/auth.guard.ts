import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from '../authServices/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService : AuthService,
              private router : Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) : boolean{
      
      const url : string = state.url;
      console.log('Url : ' + url);

      if(this.authService.isUserLoggedIn()){
        return true;
      }
      this.authService.setRedirectUrl(url);
      this.router.navigate([this.authService.getLoginUrl() ]);

      return false;
  }
  
}
