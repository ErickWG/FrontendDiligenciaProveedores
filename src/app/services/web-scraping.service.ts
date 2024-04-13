import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Proveedor } from '../model/proveedores';
import { JwtRequest } from '../model/jwt-request';
import { Offshore } from '../model/offshore';
import { Ofac } from '../model/ofac';

const base_url="http://localhost:11746"


@Injectable({
  providedIn: 'root'
})
export class WebScrapingService {


  constructor(private http:HttpClient) { }
  loginAuth(){
    const requestData = {
      username: 'admin',
      password: 'admin'
    };
    return this.http.post(base_url + "/api/Auth",requestData);
  }  
  getOffshore(nombre:string){
    let token = sessionStorage.getItem("tokenW");
    return this.http.get<Offshore[]>(`${base_url}/api/Controlador/${nombre}`,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  getOfac(nombre:string){
    let token = sessionStorage.getItem("tokenW");
    return this.http.get<Ofac[]>(`${base_url}/api/Controlador/Ofac/${nombre}`,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  getWorldbank(nombre:string){
    let token = sessionStorage.getItem("tokenW");
    return this.http.get<Offshore[]>(`${base_url}/api/Controlador/worldbank/${nombre}`,{ //falta por nombre
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
}
