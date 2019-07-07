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
          },
          {
            id: 1,
            cover: "~/images/food/rashunut/home-fries.jpg",
          },
          {
            id: 2,
            cover: "~/images/food/rashunut/nagets.jpg",
          },
          {
            id: 3,
            cover: "~/images/food/rashunut/roll.jpg",
          },
          {
            id: 4,
            cover: "~/images/food/rashunut/sabecha-salamon.jpg",
          },
          {
            id: 5,
            cover: "~/images/food/rashunut/tuna.jpg",
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
          },
          {
            id: 1,
            cover: "~/images/food/salads/p-salad.jpg",
          },
          {
            id: 2,
            cover: "~/images/food/salads/fries-salad.jpg",
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
          },
          {
            id: 1,
            cover: "~/images/food/woks/noodels.jpg",
          },
          {
            id: 2,
            cover: "~/images/food/default.jpg",
          },
        ],
      }, {
        id: 3,
        category: "דגים ופירות ים",
        products: [{
          id: 0,
          cover: "~/images/food/seafood/kalamari.jpg",
        }, {
          id: 1,
          cover: "~/images/food/seafood/shrimps-fried.jpg",
        }, {
          id: 2,
          cover: "~/images/food/seafood/crispy-fish.jpg",
        }, {
          id: 2,
          cover: "~/images/food/seafood/special.jpg",
        },
        ],
      }, {
        id: 4,
        category: "מיוחדים",
        products: [{
          id: 0,
          cover: "~/images/food/specials/special1.jpg",
        }, {
          id: 1,
          cover: "~/images/food/specials/special2.jpg",
        }, {
          id: 2,
          cover: "~/images/food/specials/rise-seafood.jpg",
        }, {
          id: 2,
          cover: "~/images/food/specials/pasta-seafood.jpg",
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
          },
          {
            id: 1,
            cover: "~/images/food/steamed/dim-sam.jpg",
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
          },
          {
            id: 1,
            cover: "~/images/food/kids/noodels.jpg",
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