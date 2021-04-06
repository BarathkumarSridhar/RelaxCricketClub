import {NgModule}  from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from '../home/home.component'

import {LoginComponent} from '../login/login.component';

const routes: Routes = [
  
  {path : 'HomeComponent', component : HomeComponent},
  {path : 'LoginComponent' , component : LoginComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule,
    
  ],
  declarations: []
})
export class AppRoutingModule { }