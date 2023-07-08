import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArcadePage } from './arcade.page';

const routes: Routes = [
  {
    path: '',
    component: ArcadePage
  },
  {
    path: 'tictactoe',
    loadChildren: () => import('./tictactoe/tictactoe.module').then( m => m.TictactoePageModule)
  },
  {
    path: 'rockpaperscisors',
    loadChildren: () => import('./rockpaperscisors/rockpaperscisors.module').then( m => m.RockpaperscisorsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArcadePageRoutingModule {}
