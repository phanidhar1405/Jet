import { Item } from './app.component';

export type NewItem = Omit<Item, 'id'>;
