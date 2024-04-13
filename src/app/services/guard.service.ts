import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate{

  constructor(private authService:AuthService, private router:Router, private snackBar: MatSnackBar) {

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    const rpta=this.authService.userIsLogin();
    if(!rpta){
      this.router.navigate(['/login']);
      this.snackBar.open("Debes iniciar sesión primero!", "Aviso",{duration:2000});
      return false;
    }
    return rpta;
  }}
