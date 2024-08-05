import { Component, Input } from '@angular/core';
import { ItemsService } from '../items.service';
import { NewItem } from '../itemwithout-id.service';
import { Item } from '../app.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  cartItem: any;
  constructor(private ItemService: ItemsService) {}
  ngOnInit() {
    this.loadItems();
  }

  loadItems() {
    this.cartItem = this.ItemService.getCartItems();
  }
}
