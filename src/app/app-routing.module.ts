import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrinavComponent } from './programs/trinav/trinav.component';
import { Tri001Component } from './programs/tri001/tri001.component';
import { Tri002Component } from './programs/tri002/tri002.component';
import { TrieventComponent } from './programs/trievent/trievent.component';
import { TrieventAddComponent } from './programs/trievent/trievent-add/trievent-add.component';

const routes: Routes =
  [{ path: '', redirectTo: '/trievent', pathMatch: 'full' },
  { path: 'tri001', component: Tri001Component },
  { path: 'tri002', component: Tri002Component },
  { path: 'trievent', component: TrieventComponent },
  {path: 'trievent-Add', component: TrieventAddComponent}
  ];
// [
//   {
//     path: 'home',
//     component: TrinavComponent,
//     children: [
//       { path: 'tri001', component: Tri001Component },
//       { path: 'tri002', component: Tri002Component },
//       { path: '', redirectTo: 'home', pathMatch: 'full' },
//     ]
//   },
//   { path: '', redirectTo: '/home', pathMatch: 'full' },
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true },
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
