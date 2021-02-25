import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  public get http(): HttpClient {
    return this._http;
  }
  public set http(value: HttpClient) {
    this._http = value;
  }

  constructor(private _http: HttpClient) { }


  getTokenAPI(UserName: string) {
    return this._http.post(`${environment.urlApi}User/getAuthorize`, UserName);
  }

  getFuncionalidadesPorRol(){
    debugger;
    return this._http.post(`${environment.urlApi}User/getFuncionalidadesPorRol`,'');
  }

  setUserLoggedIn(data: any) {
    localStorage.setItem("userToken", data);
    localStorage.setItem("validate", "true");
  }

}
