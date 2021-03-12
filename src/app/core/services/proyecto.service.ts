import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  constructor(private _http: HttpClient) { }


  getAllRegion() {
    return this._http.get(`${environment.urlApi}ProjectDetails/GetRegion`);
  }

}
