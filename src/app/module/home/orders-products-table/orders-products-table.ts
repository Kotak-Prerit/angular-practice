import {Component} from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatCard, MatCardSubtitle} from "@angular/material/card";
import {MatIcon} from "@angular/material/icon";
import {MatPaginator} from "@angular/material/paginator";
import {Divider} from '../../divider/divider';
import {MatTableModule} from '@angular/material/table';

interface product {
  image: string;
  title: string;
}

interface order{
  _id: number;
  customer: string;
  date: string;
  status: string;
  actions: Array<string>;
}

const ORDER_DATA : order[] = [
  {_id: Math.floor(1e9 + Math.random() * 9e9), customer: 'Manav', date:'31/12/2026', status: 'delivered', actions: ['more_vert', 'brush']},
  {_id: Math.floor(1e9 + Math.random() * 9e9), customer: 'upendra', date:'31/12/2026', status: 'pending', actions: ['more_vert', 'brush']},
  {_id: Math.floor(1e9 + Math.random() * 9e9), customer: 'Prerit', date:'31/12/2026', status: 'refund', actions: ['more_vert', 'brush']},
  {_id: Math.floor(1e9 + Math.random() * 9e9), customer: 'Dhruv', date:'31/12/2026', status: 'delivered', actions: ['more_vert', 'brush']},
  {_id: Math.floor(1e9 + Math.random() * 9e9), customer: 'Om', date:'31/12/2026', status: 'pending', actions: ['more_vert', 'brush']},
  {_id: Math.floor(1e9 + Math.random() * 9e9), customer: 'Nain', date:'31/12/2026', status: 'refund', actions: ['more_vert', 'brush']},
]

@Component({
  selector: 'app-orders-products-table',
  imports: [
    MatButtonModule,
    MatCard,
    MatIcon,
    MatPaginator,
    Divider,
    MatCardSubtitle,
    MatTableModule
  ],
  templateUrl: './orders-products-table.html',
  styleUrl: './orders-products-table.scss',
})
export class OrdersProductsTable {

  displayedColumns: string[] = ['_id', 'customer', 'date', 'status', 'actions'];
  dataSource = ORDER_DATA;

  productstable: product[] = [
    {image: 'https://www.logo.wine/a/logo/Dropbox_(service)/Dropbox_(service)-Icon-Logo.wine.svg', title: 'Dropbox'},
    {image: 'https://play-lh.googleusercontent.com/DSChqzPVvt0F4mGutfwuZNtcpmBIJCYlr-erQ3g41rsNfJkeMYQExxTXB7Wi9MQCOFw', title: 'Lyft'},
    {image: 'https://cdn.freebiesupply.com/logos/large/2x/github-icon-1-logo-black-and-white.png', title: 'Github'},
    {image: 'https://upload.wikimedia.org/wikipedia/commons/7/76/Slack_Icon.png', title: 'Slack'},
  ]

}
