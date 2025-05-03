import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WorkHistoryComponent } from './work-history/work-history.component';
import  { ProjectsComponent } from './projects/projects.component';
import { NavbarComponent } from "./navbar/navbar.component";
import { SocialMediaComponent } from "./social-media/social-media.component";
import { ContactComponent } from "./contact/contact.component";

@Component({
  selector: 'app-root',
  imports: [WorkHistoryComponent, ProjectsComponent, NavbarComponent, SocialMediaComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio-app';
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    const overlay = document.querySelector('.spotlight-overlay') as HTMLElement;
    if (overlay) {
      overlay.style.setProperty('--x', `${e.clientX}px`);
      overlay.style.setProperty('--y', `${e.clientY}px`);
    }
  }
}


