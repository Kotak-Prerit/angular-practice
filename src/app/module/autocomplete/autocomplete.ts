import { Component, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-autocomplete',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatCardModule,
  ],
  templateUrl: './autocomplete.html',
  styleUrl: './autocomplete.scss',
})
export class AutocompleteComponent {
  myControl = new FormControl('');
  
  options = signal<string[]>([
    'Angular',
    'React',
    'Vue',
    'Svelte',
    'Ember',
    'Backbone',
    'Meteor',
    'Aurelia',
    'Polymer',
    'Knockout',
  ]);

  filteredOptions = signal<string[]>(this.options());

  constructor() {
    this.myControl.valueChanges.subscribe((value) => {
      this.filteredOptions.set(this._filter(value || ''));
    });
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options().filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }
}
