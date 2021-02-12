import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { HeaderModule } from '../shared/header/header.module';
import { CountryCardModule } from '../shared/country-card/country-card.module';

const routes: Routes = [
  {path: "", component: HomeComponent}
]

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CountryCardModule
    
  ]
})
export class HomeModule { }
