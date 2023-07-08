import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotetakerPageRoutingModule } from './notetaker-routing.module';

import { NotetakerPage } from './notetaker.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotetakerPageRoutingModule
  ],
  declarations: [NotetakerPage]
})
export class NotetakerPageModule {}
