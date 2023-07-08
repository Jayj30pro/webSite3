import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OfficePage } from './office.page';

const routes: Routes = [
  {
    path: '',
    component: OfficePage
  },
  {
    path: 'notetaker',
    loadChildren: () => import('./notetaker/notetaker.module').then( m => m.NotetakerPageModule)
  },
  {
    path: 'weather',
    loadChildren: () => import('./weather/weather.module').then( m => m.WeatherPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OfficePageRoutingModule {}
