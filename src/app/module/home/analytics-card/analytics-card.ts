import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatIconModule} from '@angular/material/icon';
import {MatFabButton} from '@angular/material/button';

interface card {
  title: string;
  value: number;
  highLow: boolean;
  high_low_value: number;
  icon: string;
  icon_color: string,
  hidden: boolean;
  sign: string;
  useSignInPrefix: boolean;
  isProgress: boolean
}

@Component({
  selector: 'app-analytics-card',
  imports: [MatCardModule, MatProgressBarModule, MatIconModule, MatFabButton],
  templateUrl: './analytics-card.html',
  styleUrl: './analytics-card.scss',
})
export class AnalyticsCard {
  analiticsCard: card[] = [
    {title:'budget',value:24000,sign:'$', isProgress: false,useSignInPrefix: true, highLow:false, high_low_value: 12, icon:'business', icon_color: 'warn', hidden: true},
    {title:'total users',value:1600,sign:'', isProgress: false,useSignInPrefix: false, highLow:true, high_low_value: 16, icon:'account_circle', icon_color: 'accent', hidden: true},
    {title:'progress',value:75.5,sign:'%', isProgress: true,useSignInPrefix: false, highLow:false, high_low_value: 75, icon:'trending_up', icon_color: 'primary', hidden: true},
    {title:'total profit',value:23200,sign:'$', isProgress: false,useSignInPrefix: true, highLow:true, high_low_value: 16, icon:'business', icon_color: ' ', hidden: true},
  ]
}
