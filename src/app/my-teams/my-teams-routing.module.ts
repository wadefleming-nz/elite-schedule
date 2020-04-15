import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyTeamsPage } from './my-teams.page';

const routes: Routes = [
  {
    path: '',
    component: MyTeamsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyTeamsPageRoutingModule {}
