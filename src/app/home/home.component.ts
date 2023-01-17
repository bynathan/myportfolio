import { Project } from './../projects/project/project.model';
import { Component } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
 projects: Project[] =[
  {
    imgName: 'projectimagename',
    techList: 'HTML CSS JAVASCRIPT',
    name: 'Project Name',
    desc: 'Website responsive',
    classButton: 'live',
    href: 'https://github.com/bynathan'
  },
  {
    imgName: 'projectimagename',
    techList: 'HTML CSS JAVASCRIPT',
    name: 'Project Name',
    desc: 'Website responsive',
    classButton: 'live',
    href: 'https://github.com/bynathan'
  },
  {
    imgName: 'projectimagename',
    techList: 'HTML CSS JAVASCRIPT',
    name: 'Project Name',
    desc: 'Website responsive',
    classButton: 'github',
    href: 'https://github.com/bynathan'
  }
 ]
}
