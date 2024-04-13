import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { ListarComponent } from './components/listar/listar.component';
import { DialogDeleteComponent } from './components/dialog-delete/dialog-delete.component';
import { DialogEditComponent } from './components/dialog-edit/dialog-edit.component';
import { ScreeningComponent } from './components/screening/screening.component';
import { DialogScreeningComponent } from './components/dialog-screening/dialog-screening.component';
import { Screening2Component } from './components/screening2/screening2.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    ListarComponent,
    DialogDeleteComponent,
    DialogEditComponent,
    ScreeningComponent,
    DialogScreeningComponent,
    Screening2Component    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
