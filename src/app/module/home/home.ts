import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

interface cards {
  title: string;
  description: string;
  route: string;
}

@Component({
  selector: 'app-home',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
    componentCards: cards[] = [
    { title: 'Autocomplete', description: 'Learn about Angular Material Autocomplete component.', route: '/autocomplete' },
    { title: 'Badge', description: 'Learn about Angular Material Badge component.', route: '/badge' },
    { title: 'Bottom Sheet', description: 'Learn about Angular Material Bottom Sheet component.', route: '/bottom-sheet' },
    { title: 'Button', description: 'Learn about Angular Material Button component.', route: '/button' },
    ]
}
