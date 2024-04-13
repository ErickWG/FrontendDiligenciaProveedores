import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtRequest } from '../model/jwt-request';

const base_url="https://localhost:44335"


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  loginAuth(request:JwtRequest){
    return this.http.post(base_url + "/api/Auth",request);
  }
  userIsLogin(){
    let token = sessionStorage.getItem("token");
    if(token){
      return true;
    }
    else{
      return false;
    }
  }

}
