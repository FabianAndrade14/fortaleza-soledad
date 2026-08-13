import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Member {
  name: string;
  role: string;
  image: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  mission = `
    Crear un espacio donde las personas puedan compartir
    su pasión por los cómics, videojuegos, películas,
    series y todas aquellas historias que han marcado
    nuestras vidas.
  `;

  vision = `
    Convertir la Fortaleza de la Soledad en un punto de
    encuentro para los amantes de la cultura geek, donde
    las historias, la nostalgia y la comunidad tengan
    siempre un lugar.
  `;

  history = `
    Fortaleza de la Soledad nació como un proyecto personal
    inspirado en la necesidad de tener un lugar donde reunir
    todas aquellas cosas que nos apasionan.

    Lo que comenzó como una idea fue creciendo hasta
    convertirse en un espacio dedicado a compartir historias,
    colecciones, personajes y recuerdos.
  `;

  founder = {
    name: 'Fabian',
    role: 'Fundador',
    image: './assets/img/founder-1.png'
  };

  members: Member[] = [
    {
      name: 'July Ann',
      role: 'Colaborador',
      image: './assets/img/member-1.png'
    },

  ];

}