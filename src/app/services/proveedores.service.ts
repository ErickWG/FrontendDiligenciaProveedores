import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Proveedor } from '../model/proveedores';

const base_url="https://localhost:44335"


@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {
  constructor(private http:HttpClient) { }
  list(){
    let token = sessionStorage.getItem("token");
    return this.http.get<Proveedor[]>(base_url+"/api/Proveedor",{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  add(proveedor: Proveedor){
    let token = sessionStorage.getItem("token");
    return this.http.post<Proveedor[]>(`${base_url}/api/Proveedor`,proveedor,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  delete(id: number ){
    let token = sessionStorage.getItem("token");
    return this.http.delete<Proveedor[]>(`${base_url}/api/Proveedor/${id}`,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  update(id:number ,body:Proveedor ){
    let token = sessionStorage.getItem("token");
    return this.http.put<Proveedor[]>(`${base_url}/api/Proveedor/${id}`,body,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
}
