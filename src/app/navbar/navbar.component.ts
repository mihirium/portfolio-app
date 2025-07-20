import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements AfterViewInit {
  activeLine: string | null = null;

  sections = [
    { id: 'work-history', name: 'work' },
    { id: 'projects', name: 'projects' },
    { id: 'contact', name: 'contact' }
  ];

  toggleLine(section: string) {
    this.activeLine = section;
  }

  ngAfterViewInit() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const section = this.sections.find(s => s.id === entry.target.id);
          if (section) {
            this.activeLine = section.name;
          }
        }
      });
    }, options);

    this.sections.forEach(section => {
      const el = document.getElementById(section.id);
      if (el) {
        observer.observe(el);
      }
    });
  }
}
