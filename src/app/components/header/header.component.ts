import { Component, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private modalService:NgbModal){


  }


  guardarPlaylist(){


  }

  abrirNuevaPlaylist(modal :TemplateRef<any>){
   
    this.modalService.open(modal,
      {
        size:'lg',
        centered:true,


     });

  }

  seleccionarUsuario(){
  
  }

  abrirModalUsuario(modal :TemplateRef<any>){
   
    this.modalService.open(modal,
      {
        size:'lg',
        centered:true,

     }

    );

  }
}
