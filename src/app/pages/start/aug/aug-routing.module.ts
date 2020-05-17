import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AugPage } from './aug.page';

const routes: Routes = [
  {
    path: '',
    component: AugPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AugPageRoutingModule {}
