import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {MatToolbar} from '@angular/material/toolbar';

interface link {
  label: string;
  route: string;
}

@Component({
  selector: 'app-sidenav',
  imports: [MatListModule, MatIconModule, RouterLink, RouterLinkActive, MatToolbar],
  templateUrl: './sidenav.html',
  styleUrl: './sidenav.scss',
})
export class Sidenav {
  navItems: link[] = [
    { label: 'Autocomplete', route: '/autocomplete' },
    { label: 'Badge', route: '/badge' },
    { label: 'Bottom Sheet', route: '/bottom-sheet' },
    { label: 'Button', route: '/button' },
    { label: 'Button Toggle', route: '/button-toggle' },
    { label: 'Card', route: '/card' },
    { label: 'Checkbox', route: '/checkbox' },
    { label: 'Chips', route: '/chips' },
    { label: 'Core', route: '/core' },
    { label: 'Datepicker', route: '/datepicker' },
    { label: 'Dialog', route: '/dialog' },
    { label: 'Divider', route: '/divider' },
    { label: 'Expansion Panel', route: '/expansion-panel' },
    { label: 'Form Field', route: '/form-field' },
    { label: 'Grid List', route: '/grid-list' },
    { label: 'Icon', route: '/icon' },
    { label: 'Input', route: '/input' },
    { label: 'List', route: '/list' },
    { label: 'Menu', route: '/menu' },
    { label: 'Paginator', route: '/paginator' },
    { label: 'Progress Bar', route: '/progress-bar' },
    { label: 'Progress Spinner', route: '/progress-spinner' },
    { label: 'Radio Button', route: '/radio-button' },
    { label: 'Ripples', route: '/ripples' },
    { label: 'Select', route: '/select' },
    { label: 'Sidenav', route: '/sidenav' },
    { label: 'Slide Toggle', route: '/slide-toggle' },
    { label: 'Slider', route: '/slider' },
    { label: 'Snackbar', route: '/snackbar' },
    { label: 'Sort Header', route: '/sort-header' },
    { label: 'Stepper', route: '/stepper' },
    { label: 'Table', route: '/table' },
    { label: 'Tabs', route: '/tabs' },
    { label: 'Timepicker', route: '/timepicker' },
    { label: 'Toolbar', route: '/toolbar' },
    { label: 'Tooltip', route: '/tooltip' },
    { label: 'Tree', route: '/tree' },
  ];
}
