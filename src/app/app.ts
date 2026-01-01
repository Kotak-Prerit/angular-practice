import {Component, OnInit, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ThemeService} from './core/theme.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected readonly title = signal('learning-angular');
  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.themeService.initialTheme();
  }

}
