import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'overview',
    pathMatch: 'full',
  },
  {
    path: 'overview',
    loadChildren: () =>
      import('./pages/overview/overview.module').then(
        (m) => m.OverviewPageModule
      ),
  },
  {
    path: 'one',
    loadChildren: () =>
      import('./pages/one/one.module').then((m) => m.OnePageModule),
  },
  {
    path: 'two',
    loadChildren: () =>
      import('./pages/two/two.module').then((m) => m.TwoPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
