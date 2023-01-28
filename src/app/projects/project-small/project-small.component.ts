
import { Projectsmall } from './project-small.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-small',
  templateUrl: './project-small.component.html',
  styleUrls: ['./project-small.component.scss']
})
export class ProjectSmallComponent {
 @Input() projectsmall: Projectsmall
}
