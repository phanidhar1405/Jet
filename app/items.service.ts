import { Injectable } from '@angular/core';
import { Item } from './app.component';
import { NewItem } from './itemwithout-id.service';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  cartItems: any;
  constructor() {}
  getitems(): Promise<Item> {
    return fetch(`https://66b0b2466a693a95b539d51d.mockapi.io/Values`).then((res) => res.json());
  }
  getItemById(id: string) {
    return fetch(`https://66b0b2466a693a95b539d51d.mockapi.io/Values`).then((res) => res.json());
  }
  addintoCart(id: string) {
    return fetch(`https://66b0b2466a693a95b539d51d.mockapi.io/Values`)
      .then((res) => res.json())
      .then((data) => {
        this.cartItems = data;
        console.log(this.cartItems);
      });
  }
  getCartItems() {
    console.log(this.cartItems);
    return this.cartItems;
  }
}
