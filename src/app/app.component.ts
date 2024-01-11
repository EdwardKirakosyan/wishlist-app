import { Component } from '@angular/core';
import { WishItem } from '../shared/models/wishitem';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  items: WishItem[] = [
    new WishItem('to learn'),
    new WishItem('get', true),
    new WishItem('find some grass'),
  ];

  listFilter: String = '0';

  newWishText = '';

  title = 'wishlist-app';

  visibleItems: WishItem[] = this.items;

  addNewWish() {
    this.items.push(new WishItem(this.newWishText));
    this.newWishText = '';
  }

  filterChanged(value: any) {
    console.log(5);
  }

  toggleItem(item: WishItem) {
    item.isComplete = !item.isComplete;
    console.log(item);
  }
}
