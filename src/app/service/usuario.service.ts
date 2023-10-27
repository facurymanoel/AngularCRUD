import { AppConstants } from './../app-constants';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { 

  }

  gentStudentList() : Observable<any>{
      return this.http.get<any>(AppConstants.baseUrl);
  }

  getStudant(id: any) : Observable<any>{
     return this.http.get<any>(AppConstants.baseUrl + id);
  }

  deletarUsuario(id : number) : Observable<any>{
    return this.http.delete(AppConstants.baseUrl + id, {responseType : 'text'});

  }
  
  consultarUser(nome: string) : Observable<any>{
    return this.http.get(AppConstants.baseUrl + "usuarioPorNome/" + nome);

  }
  salvarUsuario(user : any) : Observable<any>{
       return this.http.post<any>(AppConstants.baseUrl, user);
  }

  /*
  updateUsuario(user : any) : Observable<any>{
     return this.http.put<any>(AppConstants.baseUrl, user);
}
*/
updateUsuario(id : number, user : any) : Observable<any>{
  return this.http.put<any>(AppConstants.baseUrl + id, user );
}

userAutenticado(){
  if(localStorage.getItem('token') !== null && 
  localStorage.getItem('token')?.toString().trim() !== null){
      return true;
}else{
  return false;
}
}



}
