import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { JwtRequest } from 'src/app/model/jwt-request';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService , private router: Router, private snackBar: MatSnackBar) { }
  username: string = ""
  password: string = ""
  role:string=""

  ngOnInit(): void {
  }
  login() {
    let request = new JwtRequest();
        request.Usuario = this.username;
        request.Contrasenia = this.password;
        this.authService.loginAuth(request).subscribe((data: any) => {


          sessionStorage.setItem("token", data.token);
          this.snackBar.open("Se ha iniciado sesion correctamente uwu!!", "Aviso",{duration:2000});
          console.log(sessionStorage.getItem("token"));

          this.router.navigate(['/list'])
    /*       this.role=this.authService.showRole();
          console.log(this.role);
          if(this.role=='ADMIN') 
          {this.router.navigate(['/empresalist'])} */
          
        }, (error) => {
          this.snackBar.open("Credenciales incorrectas!!!", "Aviso",{duration:2000});
        });
  }
}
