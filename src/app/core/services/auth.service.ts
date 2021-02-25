import { Injectable } from '@angular/core';
import { UserToken } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  getUserToken(): UserToken {
    return localStorage.userToken;
  }

}
