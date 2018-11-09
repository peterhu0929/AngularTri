import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatSidenav, MatDrawerToggleResult } from '@angular/material';

@Component({
  selector: 'app-trinav',
  templateUrl: './trinav.component.html',
  // styleUrls: ['./trinav.component.scss']
})
export class TrinavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
  programName = 'Tri-Event';
  constructor(private breakpointObserver: BreakpointObserver) { }
  toggleSideNav(drawer: MatSidenav) {
    drawer.toggle().then((result: MatDrawerToggleResult) => {
      console.log('選單狀態：' + result);
      console.log(drawer);
    });
  }
  show(item: string) {
    this.programName = item;
  }
}
