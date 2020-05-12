import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TwoPage } from './two.page';
import { TwoTwoPage } from './two-two/two-two.page';

const routes: Routes = [
  {
    path: '',
    component: TwoPage,
  },
  {
    path: 'item/:id',
    component: TwoTwoPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TwoPageRoutingModule {}
