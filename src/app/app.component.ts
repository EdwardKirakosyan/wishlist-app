import { Component } from '@angular/core';
import { WishItem } from '../shared/models/wishitem';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  items = [
    new WishItem('to learn'),
    new WishItem('get', true),
    new WishItem('find some grass'),
  ];
  title = 'wishlist-app';
}
