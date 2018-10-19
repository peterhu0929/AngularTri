import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tri001Component } from './programs/tri001/tri001.component';

const routes: Routes = [{ path: 'tri001', component: Tri001Component }];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
