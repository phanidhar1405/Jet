import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ItemComponent } from './item/item.component';
import { SearchComponent } from './search/search.component';
export interface Item {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, ItemComponent, SearchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
