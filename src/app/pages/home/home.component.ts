import { Component } from '@angular/core';

import { NavbarComponent } from '../../layout/navbar/navbar.component';
import { FooterComponent } from '../../layout/footer/footer.component';

import { HeroComponent } from '../../features/home/hero/hero.component';
import { AboutComponent } from '../../features/home/about/about.component';
import { ArchivePreviewComponent } from '../../features/home/archive-preview/archive-preview.component';
import { CommunitySectionComponent } from '../../features/home/community-section/community-section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent,
    HeroComponent,
    AboutComponent,
    ArchivePreviewComponent,
    CommunitySectionComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {}