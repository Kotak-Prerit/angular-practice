import { Component, output } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-topnav',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './topnav.html',
  styleUrl: './topnav.scss',
})
export class Topnav {
  toggleSidenav = output<void>();

  onMenuClick() {
    this.toggleSidenav.emit();
  }
}
