import { Component } from '@angular/core';
import projects from '../../assets/info/projects.json';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-projects',
  imports: [NgFor],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects = projects;
}

