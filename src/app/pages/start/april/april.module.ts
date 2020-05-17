import { ComponentsModule } from './../../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AprilPageRoutingModule } from './april-routing.module';

import { AprilPage } from './april.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AprilPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AprilPage]
})
export class AprilPageModule {}
