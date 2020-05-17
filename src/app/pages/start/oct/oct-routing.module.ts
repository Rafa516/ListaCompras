import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OctPage } from './oct.page';

const routes: Routes = [
  {
    path: '',
    component: OctPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OctPageRoutingModule {}
