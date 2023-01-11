import { ContactsComponent } from './contacts/contacts.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';

export const portfolioRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'about-me', component: AboutComponent},
  {path: 'contacts', component: ContactsComponent}
]
