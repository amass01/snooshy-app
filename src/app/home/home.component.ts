import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';
import { Category } from '../data/category.model';
import { DataService } from '../data/data.service';
import { RouterExtensions } from 'nativescript-angular/router';
import { Item } from '../data/item.model';

@Component({
  selector: 'ns-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  lastDelY = 0;
  headerCollapsed = false;
  selectedTabview = 1;
  categories: Array<Category>;

  constructor(
    private page: Page,
    private dataService: DataService,
    private routerExtensions: RouterExtensions
  ) { }

  ngOnInit(): void {
    this.categories = this.dataService.getCategories();
    this.page.actionBarHidden = true;
  }

  getItemImages(category: Category) {
    return category.products.map((item) => item.cover);
  }

  getProductName(category: Category, itemId: number) {
    return category.products[itemId].name;
  }

  productTap(categoryId: string, itemId: string) {
    this.routerExtensions.navigate([`details/${categoryId}/${itemId}`, {
        animated: true,
        transition: {
            name: "slideTop",
            duration: 380,
            curve: "easeIn"
        }
    }]);
  }

  favoritesTap() {
    this.selectedTabview = 0;
  }

  menuTap() {
    this.selectedTabview = 1;
  }
}
