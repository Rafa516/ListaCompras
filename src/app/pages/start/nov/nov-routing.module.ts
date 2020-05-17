import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NovPage } from './nov.page';

const routes: Routes = [
  {
    path: '',
    component: NovPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NovPageRoutingModule {}
