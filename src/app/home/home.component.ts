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
    background: 'red'
  },
  {
    background: 'blue'
  },
  {
    background: 'yellow'
  }
 ]
}
