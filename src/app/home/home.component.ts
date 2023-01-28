import { Project } from './../projects/project/project.model';
import { Component } from '@angular/core';
import { ProjectList } from './../projects/project/project.template';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
 projects: Project[] = ProjectList
}
