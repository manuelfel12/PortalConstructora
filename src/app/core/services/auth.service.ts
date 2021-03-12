import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserLogin, UserToken } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient) {
  }

  login(userLogin: UserLogin) {
    return this._http.post(`${environment.urlApi}Authentication/UserLogin`, userLogin);
  }

  getTokenAPI(UserName: string) {
    return this._http.post(`${environment.urlApi}User/getAuthorize`, UserName);
  }

  getFuncionalidadesPorRol() {
    return this._http.get(`${environment.urlApi}User/getFuncionalidadesPorRol`);
  }

  setUserLoggedIn(data: any) {
    localStorage.setItem("userToken", data); //auth_token
    // localStorage.setItem("validate", "true");
  }

  getUserToken(): UserToken {
    return localStorage.userToken;
  }

  getUserNameLoggedIn() {
    return this._http.get(`${environment.urlApi}User/postGetUser`);
  }

}