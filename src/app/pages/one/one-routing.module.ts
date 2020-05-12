import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OnePage } from './one.page';
import { OneTwoPage } from './one-two/one-two.page';

const routes: Routes = [
  {
    path: '',
    component: OnePage,
  },
  {
    path: 'item/:id',
    component: OneTwoPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OnePageRoutingModule {}
