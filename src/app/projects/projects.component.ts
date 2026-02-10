import { Component } from '@angular/core';
import projects from '../../assets/info/projects.json';
import { NgFor, NgIf } from '@angular/common';


@Component({
  selector: 'app-projects',
  imports: [NgFor, NgIf],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects = projects;

  // snackbar state
  snackbarMessage: string | null = null;

  onProjectClick(event: Event, project: any) {
    event.preventDefault();

    const rawLink = project?.Link ? String(project.Link).trim() : '';
    if (!rawLink || rawLink.toLowerCase() === 'null') {
      this.showSnackbar('Link will be posted soon');
      return;
    }

    // only allow http(s) absolute links
    const isHttp = /^https?:\/\//i.test(rawLink);
    if (!isHttp) {
      this.showSnackbar('Link will be posted soon');
      return;
    }

    // Open valid http(s) links in a new tab safely
    try {
      window.open(rawLink, '_blank', 'noopener');
    } catch (e) {
      window.location.href = rawLink;
    }
  }

  private showSnackbar(message: string) {
    this.snackbarMessage = message;
    setTimeout(() => this.snackbarMessage = null, 3000);
  }
}

