import { Injectable } from "@angular/core";

import { Item } from "../data/item.model";
import { Category } from "../data/category.model";

@Injectable({
  providedIn: "root",
})
export class DataService {

  private _categories: Array<Category>;

  constructor() {
    this._categories = [
      {
        id: 0,
        category: "ראשונות",
        products: [
          {
            id: 0,
            cover: "~/images/food/rashunut/adamame.jpg",
            name: "אדממה",
          },
          {
            id: 1,
            cover: "~/images/food/rashunut/home-fries.jpg",
            name: "הום פרייז",
          },
          {
            id: 2,
            cover: "~/images/food/rashunut/nagets.jpg",
            name: "נאגטס עוף",
          },
          {
            id: 3,
            cover: "~/images/food/rashunut/roll.jpg",
            name: "אגרול",
          },
          {
            id: 4,
            cover: "~/images/food/rashunut/sabecha-salamon.jpg",
            name: "סביצ'ה סלמון",
          },
          {
            id: 5,
            cover: "~/images/food/rashunut/tuna.jpg",
            name: "ברוסקטה טונה",
          },
        ],
      },
      {
        id: 1,
        category: "סלטים",
        products: [
          {
            id: 0,
            cover: "~/images/food/salads/sea-salad.jpg",
            name: "סלט ים",
          },
          {
            id: 1,
            cover: "~/images/food/salads/p-salad.jpg",
            name: "סלט פפאיה חריף",
          },
          {
            id: 2,
            cover: "~/images/food/salads/fries-salad.jpg",
            name: "סלט הומפרייז",
          },
        ],
      },
      {
        id: 2,
        category: "מוקפצים",
        products: [
          {
            id: 0,
            cover: "~/images/food/woks/pad-thai.jpg",
            name: "פאד תאי",
          },
          {
            id: 1,
            cover: "~/images/food/woks/noodels.jpg",
            name: "נודלס",
          },
          {
            id: 2,
            cover: "~/images/food/default.jpg",
            name: "מנות אורז",
          },
        ],
      }, {
        id: 3,
        category: "דגים ופירות ים",
        products: [{
          id: 0,
          cover: "~/images/food/seafood/kalamari.jpg",
          name: "קלמרי מטוגן",
          categoryTag: "fa-fire",
          categoryName: "דגים ופירות ים",
          rating: "4.9"
        }, {
          id: 1,
          cover: "~/images/food/seafood/shrimps-fried.jpg",
          name: "שרימפס מטוגן",
        }, {
          id: 2,
          cover: "~/images/food/seafood/crispy-fish.jpg",
          name: "ברבוניות מוזהבות",
        }, {
          id: 3,
          cover: "~/images/food/seafood/special.jpg",
          name: "מיקס מטוגנים",
        },
        ],
      }, {
        id: 4,
        category: "מיוחדים",
        products: [{
          id: 0,
          cover: "~/images/food/specials/special1.jpg",
          name: "מנת השף",
        }, {
          id: 1,
          cover: "~/images/food/specials/special2.jpg",
          name: "פצצות פירות ים",
        }, {
          id: 2,
          cover: "~/images/food/specials/rise-seafood.jpg",
          name: "אורז פירות ים",
        }, {
          id: 3,
          cover: "~/images/food/specials/pasta-seafood.jpg",
          name: "פסטה פירות ים",
        },
        ],
      },
      {
        id: 5,
        category: "מאודים",
        products: [
          {
            id: 0,
            cover: "~/images/food/steamed/bans.jpg",
            name: "באן",
          },
          {
            id: 1,
            cover: "~/images/food/steamed/dim-sam.jpg",
            name: "דים סאם",
          },
        ],
      },
      {
        id: 6,
        category: "מנות ילדים",
        products: [
          {
            id: 0,
            cover: "~/images/food/kids/fish-and-chips.jpg",
            name: "פיש & צ'יפס",
          },
          {
            id: 1,
            cover: "~/images/food/kids/noodels.jpg",
            name: "נודלס עוף ילדים",
          },
        ],
      },
      {
        id: 9,
        category: "קינוחים",
        products: [
          {
            id: 0,
            cover: "~/images/food/deserts/banana-l.jpg",
            name: "בננה לוטי",
          },
        ],
      },
    ];
  }

  getItem(categoryId: number, itemId: number): Item {
    const category = this._categories.find((category) => category.id === categoryId);
    return category ? category.products.find((prod) => prod.id === itemId) : {};
  }

  getCategories(): Array<Category> {
    return this._categories;
  }
}