import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  ngOnInit(): void {
    this.activeLine = this.sections[0].name; 
  }
  activeLine: string | null = null;

  sections = [
    { id: 'work-history', name: 'work' },
    { id: 'projects', name: 'projects' },
    { id: 'contact', name: 'contact' }
  ];

  toggleLine(section: string) {
    this.activeLine = section;
  }
  
}
