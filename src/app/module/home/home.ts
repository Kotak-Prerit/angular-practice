import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button'
import {RouterLink} from '@angular/router';
import {MatChipsModule} from '@angular/material/chips';

interface cards {
  title: string;
  description: string;
  route: string;
}

@Component({
  selector: 'app-home',
  imports: [MatCardModule, MatButtonModule, RouterLink, MatChipsModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
    componentCards: cards[] = [
    { title: 'Autocomplete', description: 'Learn about Angular Material Autocomplete component.', route: '/autocomplete' },
    { title: 'Badge', description: 'Learn about Angular Material Badge component.', route: '/badge' },
    { title: 'Bottom Sheet', description: 'Learn about Angular Material Bottom Sheet component.', route: '/bottom-sheet' },
    { title: 'Button', description: 'Learn about Angular Material Button component.', route: '/button' },
      { title: 'Button Toggle',description: 'Learn about Angular Material Button component.', route: '/button-toggle' },
      { title: 'Card',description: 'Learn about Angular Material Button component.', route: '/card' },
      { title: 'Checkbox',description: 'Learn about Angular Material Button component.', route: '/checkbox' },
      { title: 'Chips',description: 'Learn about Angular Material Button component.', route: '/chips' },
      { title: 'Core',description: 'Learn about Angular Material Button component.', route: '/core' },
      { title: 'Datepicker',description: 'Learn about Angular Material Button component.', route: '/datepicker' },
      { title: 'Dialog',description: 'Learn about Angular Material Button component.', route: '/dialog' },
      { title: 'Divider',description: 'Learn about Angular Material Button component.', route: '/divider' },
      { title: 'Expansion Panel',description: 'Learn about Angular Material Button component.', route: '/expansion-panel' },
      { title: 'Form Field',description: 'Learn about Angular Material Button component.', route: '/form-field' },
      { title: 'Grid List',description: 'Learn about Angular Material Button component.', route: '/grid-list' },
      { title: 'Icon',description: 'Learn about Angular Material Button component.', route: '/icon' },
      { title: 'Input',description: 'Learn about Angular Material Button component.', route: '/input' },
      { title: 'List',description: 'Learn about Angular Material Button component.', route: '/list' },
      { title: 'Menu',description: 'Learn about Angular Material Button component.', route: '/menu' },
      { title: 'Paginator',description: 'Learn about Angular Material Button component.', route: '/paginator' },
      { title: 'Progress Bar',description: 'Learn about Angular Material Button component.', route: '/progress-bar' },
      { title: 'Progress Spinner',description: 'Learn about Angular Material Button component.', route: '/progress-spinner' },
      { title: 'Radio Button',description: 'Learn about Angular Material Button component.', route: '/radio-button' },
      { title: 'Ripples',description: 'Learn about Angular Material Button component.', route: '/ripples' },
      { title: 'Select',description: 'Learn about Angular Material Button component.', route: '/select' },
      { title: 'Sidenav',description: 'Learn about Angular Material Button component.', route: '/sidenav' },
      { title: 'Slide Toggle',description: 'Learn about Angular Material Button component.', route: '/slide-toggle' },
      { title: 'Slider',description: 'Learn about Angular Material Button component.', route: '/slider' },
      { title: 'Snackbar',description: 'Learn about Angular Material Button component.', route: '/snackbar' },
      { title: 'Sort Header',description: 'Learn about Angular Material Button component.', route: '/sort-header' },
      { title: 'Stepper',description: 'Learn about Angular Material Button component.', route: '/stepper' },
      { title: 'Table',description: 'Learn about Angular Material Button component.', route: '/table' },
      { title: 'Tabs',description: 'Learn about Angular Material Button component.', route: '/tabs' },
      { title: 'Timepicker',description: 'Learn about Angular Material Button component.', route: '/timepicker' },
      { title: 'Toolbar',description: 'Learn about Angular Material Button component.', route: '/toolbar' },
      { title: 'Tooltip',description: 'Learn about Angular Material Button component.', route: '/tooltip' },
      { title: 'Tree',description: 'Learn about Angular Material Button component.', route: '/tree' },
    ]
}
