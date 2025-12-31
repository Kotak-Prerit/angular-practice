import { Component, viewChild } from '@angular/core';
import { MatSidenavModule, MatDrawer } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { Topnav } from './topnav/topnav';
import { Sidenav } from './sidenav/sidenav';

@Component({
  selector: 'app-layout',
  imports: [MatSidenavModule, RouterOutlet, Topnav, Sidenav],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {
  drawer = viewChild.required<MatDrawer>('drawer');

  toggleDrawer() {
    this.drawer().toggle();
  }
}
