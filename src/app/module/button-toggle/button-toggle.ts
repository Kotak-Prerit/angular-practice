import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDivider} from '@angular/material/list';

@Component({
  selector: 'app-button-toggle',
  imports: [MatButtonToggleModule, FormsModule, ReactiveFormsModule, MatCheckboxModule, MatDivider],
  templateUrl: './button-toggle.html',
  styleUrl: './button-toggle.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonToggle {
  fontStyleControl = new FormControl('');
  fontStyle?: string;

  hideSingleSelectionIndicator = signal(false);
  hideMultipleSelectionIndicator = signal(false);

  toggleSingleSelectionIndicator() {
    this.hideSingleSelectionIndicator.update(value => !value);
  }

  toggleMultipleSelectionIndicator() {
    this.hideMultipleSelectionIndicator.update(value => !value);
  }
}
