import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tri001Component } from './programs/tri001/tri001.component';
import { Tri002Component } from './programs/tri002/tri002.component';
import { TrinavComponent } from './programs/trinav/trinav.component';

const routes: Routes =
  [{
    path: 'trinav', component: TrinavComponent,
    children: [
      { path: 'tri001', component: Tri001Component },
      { path: 'tri002', component: Tri002Component }]
  },
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
