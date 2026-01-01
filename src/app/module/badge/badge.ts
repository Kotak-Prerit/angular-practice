import { Component } from '@angular/core';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-badge',
  imports: [
    MatBadgeModule,
    MatButton
  ],
  templateUrl: './badge.html',
  styleUrl: './badge.scss',
})
export class Badge {
  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
}
