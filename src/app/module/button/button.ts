import { Component } from '@angular/core';
import {MatDivider} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-button',
  imports: [
    MatDivider, MatButtonModule, MatIconModule
  ],
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class Button {

}
