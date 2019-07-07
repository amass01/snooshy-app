import { Injectable } from "@angular/core";

import { Item } from "../data/item.model";
import { Category } from "../data/category.model";

@Injectable({
  providedIn: "root",
})
export class DataService {
    getItems(): Array<Item> {
        return [{
            id: 1,
            name: "Manila Ultimate Tombstone Burger",
            cover: "~/images/food/burger640.jpg",
            images: [
                "~/images/food/burger/burger1.jpg",
                "~/images/food/burger/burger2.jpg",
                "~/images/food/burger/burger3.jpg",
                "~/images/food/burger/burger4.jpg",
                "~/images/food/burger/burger5.jpg",
                "~/images/food/burger/burger6.jpg"
            ],
            category: "Burger",
            categoryTag: "#2D9CDB",
            price: "300.00",
            likes: 987,
            isLike: false,
            isFavorite: true,
            comments: 13,
            rating: "4.5",
            description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione maiores, veritatis nesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi! Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
				\nRatione maiores, veritatis nesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi! Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
				\nNesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi!
				\nRatione maiores, veritatis nesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi! Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
				\nNesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi!`
        },
        {
            id: 2,
            name: "Quezon Chocolate Marble Pancake",
            cover: "~/images/food/pancake640.jpg",
            images: [
                "~/images/food/pancake/pancake1.jpg",
                "~/images/food/pancake/pancake2.jpg",
                "~/images/food/pancake/pancake3.jpg",
                "~/images/food/pancake/pancake4.jpg",
                "~/images/food/pancake/pancake5.jpg",
                "~/images/food/pancake/pancake6.jpg"
            ],
            category: "Pancake",
            categoryTag: "#e4ce0d",
            price: "230.00",
            likes: 891,
            isLike: true,
            isFavorite: true,
            comments: 7,
            rating: "4.0",
            description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione maiores, veritatis nesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi! Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
				\nRatione maiores, veritatis nesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi! Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
				\nNesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi!
				\nRatione maiores, veritatis nesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi! Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
				\nNesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi!`
        },
        {
            id: 3,
            name: "Binondo Black Forest Cake",
            cover: "~/images/food/cake640.jpg",
            images: [
                "~/images/food/cake/cake1.jpg",
                "~/images/food/cake/cake2.jpg",
                "~/images/food/cake/cake3.jpg",
                "~/images/food/cake/cake4.jpg"
            ],
            category: "Cake",
            categoryTag: "#27AE60",
            price: "300.00",
            likes: 730,
            isLike: true,
            isFavorite: true,
            comments: 11,
            rating: "4.0",
            description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione maiores, veritatis nesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi! Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
				\nRatione maiores, veritatis nesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi! Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
				\nNesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi!
				\nRatione maiores, veritatis nesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi! Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
				\nNesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi!`
        }];
    }

    getCategories(): Array<Category> {
        return [
            {
                id: 1,
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
                id: 2,
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
                id: 3,
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
                id: 4,
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
            },
            {
                id: 5,
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
            },
            // {
            //     id: 6,
            //     category: "מיוחדים",
            //     products: [
            //       {
            //         id: 0,
            //         cover: "~/images/food/burger/burger1.jpg",
            //       },
            //       {
            //         id: 1,
            //         cover: "~/images/food/burger/burger1.jpg",
            //       },
            //       {
            //         id: 2,
            //         cover: "~/images/food/burger/burger2.jpg",
            //       },
            //       {
            //         id: 3,
            //         cover: "~/images/food/burger/burger3.jpg",
            //       },
            //       {
            //         id: 4,
            //         cover: "~/images/food/burger/burger4.jpg",
            //       },
            //       {
            //         id: 5,
            //         cover: "~/images/food/burger/burger5.jpg",
            //       },
            //       {
            //         id: 6,
            //         cover: "~/images/food/burger/burger6.jpg",
            //       }
            //     ],
            // },
            // {
            //     id: 8,
            //     category: "מנות ילדים",
            //     products: [
            //       {
            //         id: 0,
            //         cover: "~/images/food/burger/burger1.jpg",
            //       },
            //       {
            //         id: 1,
            //         cover: "~/images/food/burger/burger1.jpg",
            //       },
            //       {
            //         id: 2,
            //         cover: "~/images/food/burger/burger2.jpg",
            //       },
            //       {
            //         id: 3,
            //         cover: "~/images/food/burger/burger3.jpg",
            //       },
            //       {
            //         id: 4,
            //         cover: "~/images/food/burger/burger4.jpg",
            //       },
            //       {
            //         id: 5,
            //         cover: "~/images/food/burger/burger5.jpg",
            //       },
            //       {
            //         id: 6,
            //         cover: "~/images/food/burger/burger6.jpg",
            //       }
            //     ],
            // },
            // {
            //     id: 9,
            //     category: "קינוחים",
            //     products: [
            //       {
            //         id: 0,
            //         cover: "~/images/food/burger/burger1.jpg",
            //       },
            //       {
            //         id: 1,
            //         cover: "~/images/food/burger/burger1.jpg",
            //       },
            //       {
            //         id: 2,
            //         cover: "~/images/food/burger/burger2.jpg",
            //       },
            //       {
            //         id: 3,
            //         cover: "~/images/food/burger/burger3.jpg",
            //       },
            //       {
            //         id: 4,
            //         cover: "~/images/food/burger/burger4.jpg",
            //       },
            //       {
            //         id: 5,
            //         cover: "~/images/food/burger/burger5.jpg",
            //       },
            //       {
            //         id: 6,
            //         cover: "~/images/food/burger/burger6.jpg",
            //       }
            //     ],
            // },
        ];
    }
}