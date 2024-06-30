import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Spotity-frontend';

  regionVisible:String = '';

  verArtista(id :number){
    this.regionVisible = "artistas";
   
    console.log('Ver artista con ID: ' + id);
    

  }

  verPlayList(id : number){

    this.regionVisible = "playlists";
    console.log('Ver playlist con ID: ' + id);
  }
}
