import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

	constructor(private router: Router, private authService: AuthService) {    
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      const userToken = this.authService.getUserToken();
      console.log('userToken', userToken);
      
      try {
        debugger;
        if (userToken) {
          if (!userToken) {
            alert("Tu usuario se encuentra inactivo, por favor consulte al administrador");
            return false;
          }          
          return true;
        } else {
          this.router.navigate(["/login"]);
          return false;
        }
      } catch (error) {
        this.router.navigate(["/login"]);
        return false;
      }
  }
  
}
