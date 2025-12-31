import { Routes } from '@angular/router';
import { Layout } from './layout/layout';
import { Home } from './module/home/home';
import { AutocompleteComponent } from './module/autocomplete/autocomplete';
import { Badge } from './module/badge/badge';
import { Button } from './module/button/button';
import { Bottomsheet } from './module/bottomsheet/bottomsheet';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      { path: '', component: Home },
      { path: 'autocomplete', component: AutocompleteComponent },
      { path: 'badge', component: Badge},
      { path: 'button', component: Button},
    {path: 'bottom-sheet', component: Bottomsheet}
    ],
    
  },
];
