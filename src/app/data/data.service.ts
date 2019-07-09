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
            categoryName: "ראשונות",
            price: "15",
          },
          {
            id: 1,
            cover: "~/images/food/rashunut/home-fries.jpg",
            name: "הום פרייז",
            categoryName: "ראשונות",
            description: "קוביות תפוח אדמה ברוטב צ'ילי מתוק",
            price: "15",
          },
          {
            id: 2,
            cover: "~/images/food/rashunut/nagets.jpg",
            name: "נאגטס עוף",
            categoryName: "ראשונות",
            price: "25",
          },
          {
            id: 3,
            cover: "~/images/food/rashunut/roll.jpg",
            name: "אגרול",
            categoryName: "ראשונות",
            price: "15",
          },
          {
            id: 4,
            cover: "~/images/food/rashunut/sabecha-salamon.jpg",
            name: "סביצ'ה סלמון",
            categoryName: "ראשונות",
            description: "קוביות סלמון, שירי, פטרוזליה, בצל סגול, נענע ובלסמי",
            price: "30",
          },
          {
            id: 5,
            cover: "~/images/food/rashunut/tuna.jpg",
            name: "ברוסקטה טונה",
            categoryName: "ראשונות",
            description: "שירי צבעוני, בצל ירוק, פטרוזליה, נענע, איולי לימון וטונה צרונה",
            price: "30",
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
            categoryName: "סלטים",
            price: "40",
          },
          {
            id: 1,
            cover: "~/images/food/salads/p-salad.jpg",
            name: "סלט פפאיה חריף",
            categoryName: "סלטים",
            price: "30",
          },
          {
            id: 2,
            cover: "~/images/food/salads/fries-salad.jpg",
            name: "סלט הומפרייז",
            categoryName: "סלטים",
            price: "30",
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
            categoryName: "מוקפצים",
          },
          {
            id: 1,
            cover: "~/images/food/woks/noodels.jpg",
            name: "נודלס",
            categoryName: "מוקפצים",
          },
          {
            id: 2,
            cover: "~/images/food/default.jpg",
            name: "מנות אורז",
            categoryName: "מוקפצים",
          },
        ],
      }, {
        id: 3,
        category: "דגים ופירות ים",
        products: [{
          id: 0,
          cover: "~/images/food/seafood/kalamari.jpg",
          name: "קלמרי מטוגן",
          categoryName: "דגים ופירות ים",
        }, {
          id: 1,
          cover: "~/images/food/seafood/shrimps-fried.jpg",
          name: "שרימפס מטוגן",
          categoryTag: "fa-fish",
          categoryName: "דגים ופירות ים",
        }, {
          id: 2,
          cover: "~/images/food/seafood/crispy-fish.jpg",
          name: "ברבוניות מוזהבות",
          categoryName: "דגים ופירות ים",
        }, {
          id: 3,
          cover: "~/images/food/seafood/special.jpg",
          name: "מיקס מטוגנים",
          categoryName: "דגים ופירות ים",
        },
        ],
      }, {
        id: 4,
        category: "מיוחדים",
        products: [{
          id: 0,
          cover: "~/images/food/specials/special1.jpg",
          name: "מנת השף",
          categoryName: "מיוחדים",
        }, {
          id: 1,
          cover: "~/images/food/specials/special2.jpg",
          name: "פצצות פירות ים",
          categoryName: "מיוחדים",
        }, {
          id: 2,
          cover: "~/images/food/specials/rise-seafood.jpg",
          name: "אורז פירות ים",
          categoryName: "מיוחדים",
        }, {
          id: 3,
          cover: "~/images/food/specials/pasta-seafood.jpg",
          name: "פסטה פירות ים",
          categoryName: "מיוחדים",
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
            categoryName: "מאודים",
          },
          {
            id: 1,
            cover: "~/images/food/steamed/dim-sam.jpg",
            name: "דים סאם",
            categoryName: "מאודים",
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
            categoryName: "מנות ילדים",
          },
          {
            id: 1,
            cover: "~/images/food/kids/noodels.jpg",
            name: "נודלס עוף ילדים",
            categoryName: "מנות ילדים",
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
            categoryName: "קינוחים",
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