import { Component } from '@angular/core';
import { ItemComponent } from '../item/item.component';
import { ItemsService } from '../items.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [ItemComponent, RouterLink],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  filteredItems: any;
  items: any;
  constructor(public ItemService: ItemsService) {}
  ngOnInit() {
    this.loadItems();
  }

  loadItems() {
    this.ItemService.getitems().then((data) => {
      this.items = data;
      this.filteredItems = this.items;
    });
  }
}
