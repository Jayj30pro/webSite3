import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotetakerPage } from './notetaker.page';

const routes: Routes = [
  {
    path: '',
    component: NotetakerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotetakerPageRoutingModule {}
