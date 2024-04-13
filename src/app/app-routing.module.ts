import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ListarComponent } from './components/listar/listar.component';
import { GuardService } from './services/guard.service';
import { ScreeningComponent } from './components/screening/screening.component';
import { Screening2Component } from './components/screening2/screening2.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'list', component: ListarComponent, canActivate: [GuardService]},
  {path: 'Offshore/:nombre', component: ScreeningComponent, canActivate: [GuardService]},
  {path: 'OFAC/:nombre', component: Screening2Component, canActivate: [GuardService]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
