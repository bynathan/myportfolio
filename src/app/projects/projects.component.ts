import { Component } from '@angular/core';
import { Project } from './../projects/project/project.model';
import { ProjectList } from './project/project.template';
import { Projectsmall } from './project-small/project-small.model';
import { ProjectSmallList } from './project-small/project-small.template';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects: Project[] = ProjectList
  projectsmalls: Projectsmall[] = ProjectSmallList
}
