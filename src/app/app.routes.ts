import { Routes } from '@angular/router';
import { Layout } from './layout/layout';
import { Home } from './module/home/home';
import { AutocompleteComponent } from './module/autocomplete/autocomplete';
import { Badge } from './module/badge/badge';
import { Button } from './module/button/button';
import { Bottomsheet } from './module/bottomsheet/bottomsheet';
import {Card} from './module/card/card';
import {Checkbox} from './module/checkbox/checkbox';
import {Chips} from './module/chips/chips';
import {Datepicker} from './module/datepicker/datepicker';
import {Dialog} from './module/dialog/dialog';
import {Divider} from './module/divider/divider';
import {ExpansionPanel} from './module/expansion-panel/expansion-panel';
import {FormField} from './module/form-field/form-field';
import {Icon} from './module/icon/icon';
import {Input} from './module/input/input';
import {List} from './module/list/list';
import {Menu} from './module/menu/menu';
import {Paginator} from './module/paginator/paginator';
import {ProgressBar} from './module/progress-bar/progress-bar';
import {ProgressSpinner} from './module/progress-spinner/progress-spinner';
import {RadioButton} from './module/radio-button/radio-button';
import {Ripples} from './module/ripples/ripples';
import {Select} from './module/select/select';
import {Sidenav} from './module/sidenav/sidenav';
import {SlideToggle} from './module/slide-toggle/slide-toggle';
import {Slider} from './module/slider/slider';
import {Snackbar} from './module/snackbar/snackbar';
import {SortHeader} from './module/sort-header/sort-header';
import {Stepper} from './module/stepper/stepper';
import {Table} from './module/table/table';
import {Tabs} from './module/tabs/tabs';
import {Timepicker} from './module/timepicker/timepicker';
import {Toolbar} from './module/toolbar/toolbar';
import {ButtonToggle} from './module/button-toggle/button-toggle';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      { path: '', component: Home },
      { path: 'autocomplete', component: AutocompleteComponent },
      { path: 'badge', component: Badge},
      { path: 'button', component: Button},
      { path: 'button-toggle', component: ButtonToggle},
      {path: 'bottom-sheet', component: Bottomsheet},
      {path: 'card', component: Card},
      {path: 'checkbox', component: Checkbox},
      {path: 'chips', component: Chips},
      {path: 'datepicker', component: Datepicker},
      {path: 'dialog', component: Dialog},
      {path: 'divider', component: Divider},
      {path: 'expansion-panel', component: ExpansionPanel},
      {path: 'form-field', component: FormField},
      {path: 'icon', component: Icon},
      {path: 'input', component: Input},
      {path: 'list', component: List},
      {path: 'menu', component: Menu},
      {path: 'paginator', component: Paginator},
      {path: 'progressbar', component: ProgressBar},
      {path: 'progress-spinner', component: ProgressSpinner},
      {path: 'radio', component: RadioButton},
      {path: 'ripples', component: Ripples},
      {path: 'select', component: Select},
      {path: 'sidenav', component: Sidenav},
      {path: 'slide-toggle', component: SlideToggle},
      {path: 'slider', component: Slider},
      {path: 'snackbar', component: Snackbar},
      {path: 'sort-header', component: SortHeader},
      {path: 'stepper', component: Stepper},
      {path: 'table', component: Table},
      {path: 'tabs', component: Tabs},
      {path: 'timepicker', component: Timepicker},
      {path: 'toolbar', component: Toolbar},

    ],

  },
];
