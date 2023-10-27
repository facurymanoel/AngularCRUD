import { UsuarioService } from './../../../service/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

      //students: Observable<User[]>;
       
      //students: Array<User> =[
        //{id: 0, 
        //login:"",  
       // nome:"" , 
        //telefone:"" }

        //];
      
         students: Array<User>;
         
         nome : string;


    constructor(private usuarioService : UsuarioService ) { 
     // this.students = [];
  }

   ngOnInit(): void {
     this.usuarioService.gentStudentList().subscribe(data => {
      this.students = data;
     });
  }

  deleteUsuario(id : number){

    if(confirm('Deseja mesmo remover?')){
      
      this.usuarioService.deletarUsuario(id).subscribe(data => {
      console.log("Retorno do método delete : " + data);
      //Carrega a lista
     this.usuarioService.gentStudentList().subscribe(data => {
      this.students = data;
     });

    });
  }
}

consultarUser(){
   this.usuarioService.consultarUser(this.nome).subscribe(data => {
        this.students = data;
   });

  }

  


}
