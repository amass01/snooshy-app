import { Item } from "./item.model";

export interface Category { 
  id: number;
  cover: string;
  category: string;
  count: string;
  products: Array<Item>;
}