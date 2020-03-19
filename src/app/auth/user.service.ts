import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  isAuthanticated: boolean = false;

  constructor() { }

  login(userName: string, password: string){
    this.isAuthanticated = true;
  }

  logout(){
    this.isAuthanticated = false;
  }

  isAuthenticated(){
    return this.isAuthanticated;
  }
}
