import { Item } from "./item.model";

export interface Category { 
  id: number;
  category: string;
  products: Array<Item>;
}