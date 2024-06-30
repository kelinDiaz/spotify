import { Component, TemplateRef } from '@angular/core';
import {faPlay, faPlus}from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrl: './album.component.css'
})
export class AlbumComponent {

  constructor(private modalService: NgbModal){

  }

  faPlay = faPlay;
  faPlus = faPlus;



  guardarCancionPlaylist(){

  }

  agregarAPlaylist(modal: TemplateRef<any>){

    this.modalService.open(modal,
      {
        size:'xs',
        centered:true,

     }

    );


 
  }
}
