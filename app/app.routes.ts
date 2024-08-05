import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { ItemdetailsComponent } from './itemdetails/itemdetails.component';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'search',
    component: SearchComponent,
  },
  {
    path: 'search/:id',
    component: ItemdetailsComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
];
