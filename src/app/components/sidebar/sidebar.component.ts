import { Component, EventEmitter, Output } from '@angular/core';

import {faMusic, faPlay} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
 
})
export class SidebarComponent {
  @Output() onVerArtista = new EventEmitter();
  @Output() onVerPlayList = new EventEmitter();

  faMusic = faMusic;
  faPlay = faPlay;
  
  verArtista(id : number){
    this.onVerArtista.emit(id);
 
   }
   verPlaylist(id :number){
     this.onVerPlayList.emit(id);
   }

}
