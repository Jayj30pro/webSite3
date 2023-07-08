import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RockpaperscisorsPageRoutingModule } from './rockpaperscisors-routing.module';

import { RockpaperscisorsPage } from './rockpaperscisors.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RockpaperscisorsPageRoutingModule
  ],
  declarations: [RockpaperscisorsPage]
})
export class RockpaperscisorsPageModule {}
