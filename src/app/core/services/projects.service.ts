import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ProjectsIds } from '../models/projects.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private _http: HttpClient) {     
  }

  getProjectxUser() {
    return this._http.get(`${environment.urlApi}ProjectDetails/ProjectsForUser`);
  }

  getProjectsByUser(projectId: number[], isAll: boolean) {
    let modelo = new ProjectsIds();
    modelo.isAll = isAll;
    modelo.projectsCode = projectId;

    const headers = { 'content-type': 'application/json'}  
    const body = JSON.stringify(modelo)  
    return this._http.post(`${environment.urlApi}ProjectDetails/GetClientForCunstructor`, body,{'headers':headers});       
  }
  
}
