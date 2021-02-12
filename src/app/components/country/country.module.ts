import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryComponent } from './country.component'
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: ":id", component: CountryComponent }
]

@NgModule({
  declarations: [CountryComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CountryModule { }
