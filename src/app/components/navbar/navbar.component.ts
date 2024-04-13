import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private authService: AuthService, private snackBar: MatSnackBar, private router: Router) {}

  userIsLogin(){
    if (this.authService.userIsLogin()){
      return true;
    }
    else{
      return false;
    }
  }
  cerrar(){
    sessionStorage.clear();
    this.router.navigate(['/login'])
    this.snackBar.open("Has cerrado sesión correctamente.", "Aviso",{duration:2000});

  }
}
