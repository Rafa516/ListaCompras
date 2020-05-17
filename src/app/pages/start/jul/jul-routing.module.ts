import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JulPage } from './jul.page';

const routes: Routes = [
  {
    path: '',
    component: JulPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JulPageRoutingModule {}
