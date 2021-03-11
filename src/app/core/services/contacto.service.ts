import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  constructor(private _http: HttpClient) { }


  getAllTypeContacts(){
    return this._http.get(`${environment.urlApi}ProjectDetails/GetTypeContacts`)
  } 
}
