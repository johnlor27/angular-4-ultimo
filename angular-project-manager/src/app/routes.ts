import {Routes} from '@angular/router';

import {ProjectListComponent} from './auth/project-list/project-list.component';

export const routes: Routes = [
  // {
  //   path: '', pathMatch: 'full', redirectTo: '/login',
  // },

  {
    path: 'proyectos', component: ProjectListComponent,
    data: {name: 'Proyectos'},
    children: [
      {path: '', component: ProjectListComponent, pathMatch: 'full'},
      // { path: 'detalle/:id', component: ProjectDetailComponent },
    ],
  },

];
