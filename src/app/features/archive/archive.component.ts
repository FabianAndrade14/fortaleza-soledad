import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ArchiveCategory {
  title: string;
  description: string;
  image: string;
  route: string;
}

@Component({
  selector: 'app-archive',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './archive.component.html',
  styleUrl: './archive.component.scss'
})
export class ArchiveComponent {

  categories: ArchiveCategory[] = [

    {
      title: 'Cómics',
      description: 'Historias, personajes y aventuras que viven entre páginas.',
      image: '',
      route: '/archive/comics'
    },

    {
      title: 'Videojuegos',
      description: 'Los mundos digitales que nos acompañaron durante años.',
      image: 'assets/images/archive/video-games.jpg',
      route: '/archive/videojuegos'
    },

    {
      title: 'Películas',
      description: 'Héroes, villanos y universos que llegaron a la pantalla.',
      image: 'assets/images/archive/movies.jpg',
      route: '/archive/peliculas'
    },

    {
      title: 'Series',
      description: 'Historias que hicieron que esperáramos cada nuevo episodio.',
      image: 'assets/images/archive/series.jpg',
      route: '/archive/series'
    },

    {
      title: 'Personajes',
      description: 'Los protagonistas y antagonistas que forman nuestros universos favoritos.',
      image: 'assets/images/archive/characters.jpg',
      route: '/archive/personajes'
    },

    {
      title: 'Retro',
      description: 'Una mirada a aquello que nunca dejamos atrás.',
      image: 'assets/images/archive/retro.jpg',
      route: '/archive/retro'
    }

  ];

}
