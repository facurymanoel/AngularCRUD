import { GuardiaoGuard } from './service/guardiao.guard';
import { HttpInterceptorModule } from './service/header-interceptor.service';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import {HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component'; //Requisições Ajax, post, put, delete 
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { LoginComponent } from './login/login.component';
import { UsuarioComponent } from './componente/usuario/usuario/usuario.component';
import { UsuarioAddComponent } from './componente/usuario/usuario-add/usuario-add.component';

export const appRouters: Routes = [
 
  {path : 'home', component : HomeComponent, canActivate:[GuardiaoGuard]},
  {path : 'login', component : LoginComponent},
  {path : '', component : LoginComponent}, 
  {path : 'userList', component : UsuarioComponent, canActivate:[GuardiaoGuard]},
  {path : 'usuarioAdd', component : UsuarioAddComponent, canActivate:[GuardiaoGuard]},
  {path : 'usuarioAdd/:id', component : UsuarioAddComponent, canActivate:[GuardiaoGuard]},


];

export const routes : ModuleWithProviders = RouterModule.forRoot(appRouters);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    UsuarioComponent,
    UsuarioAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    HttpClientModule,
    routes,
    HttpInterceptorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
