import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectsPage } from './projects.page';

const routes: Routes = [
  {
    path: '',
    component: ProjectsPage
  },
  {
    path: 'arcade',
    loadChildren: () => import('./arcade/arcade.module').then( m => m.ArcadePageModule)
  },
  {
    path: 'office',
    loadChildren: () => import('./office/office.module').then( m => m.OfficePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectsPageRoutingModule {}
