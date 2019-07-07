import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';
import { Item } from '../data/item.model';
import { Category } from '../data/category.model';
import { DataService } from '../data/data.service';

@Component({
  selector: 'ns-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  lastDelY = 0;
  headerCollapsed = false;
  selectedTabview = 1;
  items: Array<Item>;
  categories: Array<Category>;

  constructor(
    private page: Page,
    private dataService: DataService,
  ) { }

  ngOnInit(): void {
    this.items = this.dataService.getItems();
    this.categories = this.dataService.getCategories();
    this.page.actionBarHidden = true;
  }

  getItemImages(category: Category) {
    return category.products.map((item) => item.cover);
  }

  showItem(itemId: string) {
    console.log(`Tapped on ${itemId}`);
    // this.routerExtensions.navigate(["detail/" + itemId, {
    //     animated: true,
    //     transition: {
    //         name: "slideTop",
    //         duration: 380,
    //         curve: "easeIn"
    //     }
    // }]);
  }

  toggleLike(item) {
    item.isLike = !item.isLike;
    if (item.isLike) {
      item.likes += 1;
    } else {
      item.likes -= 1;
    }
  }

  toggleHeart(item) {
    item.isFavorite = !item.isFavorite;
  }

  categoryIcon(itemCategory: string) {
    switch (itemCategory) {
      case "Burger":
        return String.fromCharCode(0xf0f5); //"fa-cutlery";
        break;
      case "Beer":
        return String.fromCharCode(0xf0fc); //"fa-beer";
        break;
      case "Pancake":
        return String.fromCharCode(0xf0f4); //"fa-coffee";
        break;
      case "Cake":
        return String.fromCharCode(0xf1fd); //"fa-birthday-cake";
        break;
      default:
        return String.fromCharCode(0xf06d); //"fa-fire";
        break;
    }
  }

  onPopularTap() {
    this.selectedTabview = 0;
  }

  onCategoryTap() {
    this.selectedTabview = 1;
  }

  onPromosTap() {
    this.selectedTabview = 2;
  }
}
