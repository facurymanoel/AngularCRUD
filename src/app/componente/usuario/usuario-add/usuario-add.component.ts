import { UsuarioService } from './../../../service/usuario.service';
import { User } from 'src/app/model/user';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './usuario-add.component.html',
  styleUrls: ['./usuario-add.component.css']
})
export class UsuarioAddComponent implements OnInit {

  usuario = new User();

  constructor(private  routeActive : ActivatedRoute, private userService : UsuarioService ) { }

  ngOnInit(): void {
    let id = this.routeActive.snapshot.paramMap.get('id');

    if(id != null ){
        // console.log('Valor sendo editado: ' + id);
        this.userService.getStudant(id).subscribe(data => {
         this.usuario = data;
        });
    }
  }

     /*
  salvarUser(){
    //console.info(this.usuario);
    if(this.usuario.id != null && this.usuario.id.toString().trim() != null){//Atualizando ou Editando
           
           this.userService.updateUsuario(this.usuario).subscribe(data =>{
            this.novo();
             console.info("User Atualizando: " + data);
           });
    }else{
          this.userService.salvarUsuario(this.usuario).subscribe(data => { //Salvando um novo User
           this.novo();   
           console.info("Gravou User: " + data)
         });
    }

  }
   */

  salvarUser(){
    //console.info(this.usuario);
    //if(!this.usuario.id != null && this.usuario.id.toString().trim() != null){//Atualizando ou Editando
           
      this.userService.salvarUsuario(this.usuario).subscribe(data => { //Salvando um novo User
        this.novo();   
        console.info("Gravou User: " + data)
      });
     
   // }

  }



  novo(){
      this.usuario = new User();
  }

  atualizar(id: number){
    this.userService.updateUsuario(id, this.usuario).subscribe(data =>{
      this.novo();
       console.info("User Atualizando: " + data);
      });
     
  }

   

}
