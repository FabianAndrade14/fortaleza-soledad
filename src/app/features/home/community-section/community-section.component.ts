import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface SocialLink {
  title: string;
  username: string;
  icon: string;
  url: string;
}

@Component({
  selector: 'app-community-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './community-section.component.html',
  styleUrl: './community-section.component.scss'
})
export class CommunitySectionComponent {

  socialLinks: SocialLink[] = [
    {
      title: 'Facebook',
      username: 'Fortaleza de la Soledad',
      icon: '📘',
      url: '#'
    },
    {
      title: 'Instagram',
      username: '@fortalezadelasoledad',
      icon: '📷',
      url: '#'
    },
    {
      title: 'YouTube',
      username: 'Fortaleza de la Soledad',
      icon: '▶️',
      url: '#'
    }
  ];

}