import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: "home", loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule) },
  { path: "country", loadChildren: () => import('./components/country/country.module').then(m => m.CountryModule) },
  {
    path      : '**',
    redirectTo: 'home'
  },
  {
      path      : '',
      redirectTo: 'home',
      pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
