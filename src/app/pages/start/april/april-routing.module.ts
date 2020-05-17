import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AprilPage } from './april.page';

const routes: Routes = [
  {
    path: '',
    component: AprilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AprilPageRoutingModule {}
