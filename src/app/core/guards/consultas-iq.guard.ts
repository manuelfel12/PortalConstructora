import Swal from 'sweetalert2';
import { Injectable } from '@angular/core';
import { CanLoad, Route, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivateChild } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ConsultasIQGuard implements CanLoad, CanActivateChild {


  constructor() {
  }


  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
    debugger;
    let url: string = state.url;

    if (url == '/AdministracionUsuario/Crear') {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You are not authorised to visit this page!',
      })
      return false;
    }
    return true;
  }

  canLoad(route: Route): boolean {
    debugger;
    let url: string = route.path;
    console.log('Url:' + url);
    if (url == 'AdministracionUsuario') {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You are not authorised to visit this page!',
        // footer: '<a href>Why do I have this issue?</a>'
      })
      return false;
    }

    return true;
  }


}
