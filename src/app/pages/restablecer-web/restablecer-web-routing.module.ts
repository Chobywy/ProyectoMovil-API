import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestablecerWebPage } from './restablecer-web.page';

const routes: Routes = [
  {
    path: '',
    component: RestablecerWebPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestablecerWebPageRoutingModule {}
