import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface ArchiveCategory{
  title:string;
  description:string;
  icon:string;
}

@Component({
  selector: 'app-archive-preview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './archive-preview.component.html',
  styleUrl: './archive-preview.component.scss'
})
export class ArchivePreviewComponent {

  categories: ArchiveCategory[] = [

    {
      title:'Comics',
      description:'Marvel, DC, Image, Dark Horse y mucho más.',
      icon:'📚'
    },

    {
      title:'Videojuegos',
      description:'Nintendo, PlayStation, Xbox, PC y retro.',
      icon:'🎮'
    },

    {
      title:'Películas',
      description:'Las historias que llegaron a la pantalla grande.',
      icon:'🎬'
    },

    {
      title:'Series',
      description:'Producciones que expandieron nuestros universos favoritos.',
      icon:'📺'
    },

    {
      title:'Colecciones',
      description:'Figuras, estatuas, cómics y artículos especiales.',
      icon:'🦸'
    },

    {
      title:'Retro',
      description:'Todo aquello que marcó nuestra infancia.',
      icon:'🕹️'
    }

  ];

}