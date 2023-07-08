import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RockpaperscisorsPage } from './rockpaperscisors.page';

const routes: Routes = [
  {
    path: '',
    component: RockpaperscisorsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RockpaperscisorsPageRoutingModule {}
