import { Component, output } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {ThemeService} from '../../core/theme.service';

@Component({
  selector: 'app-topnav',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './topnav.html',
  styleUrl: './topnav.scss',
})

export class Topnav {
  toggleSidenav = output<void>();
  constructor(private themeService: ThemeService) {}

  toggleTheme() {
    this.themeService.toggleTheme();
  }


  onMenuClick() {
    this.toggleSidenav.emit();
  }
}
