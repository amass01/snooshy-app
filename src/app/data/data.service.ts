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
                cover: "~/images/food/burger640.jpg",
                category: "ראשונות",
                products: [
                  {
                    id: 0,
                    cover: "~/images/food/burger/burger1.jpg",
                  },
                  {
                    id: 1,
                    cover: "~/images/food/burger/burger1.jpg",
                  },
                  {
                    id: 2,
                    cover: "~/images/food/burger/burger2.jpg",
                  },
                  {
                    id: 3,
                    cover: "~/images/food/burger/burger3.jpg",
                  },
                  {
                    id: 4,
                    cover: "~/images/food/burger/burger4.jpg",
                  },
                  {
                    id: 5,
                    cover: "~/images/food/burger/burger5.jpg",
                  },
                  {
                    id: 6,
                    cover: "~/images/food/burger/burger6.jpg",
                  }
                ],
                count: "13",
            },
            {
                id: 2,
                cover: "~/images/food/pancake640.jpg",
                category: "מאודים",
                count: "5",
                products: [
                  {
                    id: 0,
                    cover: "~/images/food/burger/burger1.jpg",
                  },
                  {
                    id: 1,
                    cover: "~/images/food/burger/burger1.jpg",
                  },
                  {
                    id: 2,
                    cover: "~/images/food/burger/burger2.jpg",
                  },
                  {
                    id: 3,
                    cover: "~/images/food/burger/burger3.jpg",
                  },
                  {
                    id: 4,
                    cover: "~/images/food/burger/burger4.jpg",
                  },
                  {
                    id: 5,
                    cover: "~/images/food/burger/burger5.jpg",
                  },
                  {
                    id: 6,
                    cover: "~/images/food/burger/burger6.jpg",
                  }
                ],
            },
            {
                id: 3,
                cover: "~/images/food/cake640.jpg",
                category: "סלטים",
                count: "9",
                products: [
                  {
                    id: 0,
                    cover: "~/images/food/burger/burger1.jpg",
                  },
                  {
                    id: 1,
                    cover: "~/images/food/burger/burger1.jpg",
                  },
                  {
                    id: 2,
                    cover: "~/images/food/burger/burger2.jpg",
                  },
                  {
                    id: 3,
                    cover: "~/images/food/burger/burger3.jpg",
                  },
                  {
                    id: 4,
                    cover: "~/images/food/burger/burger4.jpg",
                  },
                  {
                    id: 5,
                    cover: "~/images/food/burger/burger5.jpg",
                  },
                  {
                    id: 6,
                    cover: "~/images/food/burger/burger6.jpg",
                  }
                ],
            },
            {
                id: 4,
                cover: "~/images/food/beer640.jpg",
                category: "מוקפצים",
                count: "7",
                products: [
                  {
                    id: 0,
                    cover: "~/images/food/burger/burger1.jpg",
                  },
                  {
                    id: 1,
                    cover: "~/images/food/burger/burger1.jpg",
                  },
                  {
                    id: 2,
                    cover: "~/images/food/burger/burger2.jpg",
                  },
                  {
                    id: 3,
                    cover: "~/images/food/burger/burger3.jpg",
                  },
                  {
                    id: 4,
                    cover: "~/images/food/burger/burger4.jpg",
                  },
                  {
                    id: 5,
                    cover: "~/images/food/burger/burger5.jpg",
                  },
                  {
                    id: 6,
                    cover: "~/images/food/burger/burger6.jpg",
                  }
                ],
            },
            {
                id: 5,
                cover: "~/images/food/beer640.jpg",
                category: "דגים ופירות ים",
                count: "7",
                products: [
                  {
                    id: 0,
                    cover: "~/images/food/burger/burger1.jpg",
                  },
                  {
                    id: 1,
                    cover: "~/images/food/burger/burger1.jpg",
                  },
                  {
                    id: 2,
                    cover: "~/images/food/burger/burger2.jpg",
                  },
                  {
                    id: 3,
                    cover: "~/images/food/burger/burger3.jpg",
                  },
                  {
                    id: 4,
                    cover: "~/images/food/burger/burger4.jpg",
                  },
                  {
                    id: 5,
                    cover: "~/images/food/burger/burger5.jpg",
                  },
                  {
                    id: 6,
                    cover: "~/images/food/burger/burger6.jpg",
                  }
                ],
            },
            {
                id: 6,
                cover: "~/images/food/beer640.jpg",
                category: "מיוחדים",
                count: "7",
                products: [
                  {
                    id: 0,
                    cover: "~/images/food/burger/burger1.jpg",
                  },
                  {
                    id: 1,
                    cover: "~/images/food/burger/burger1.jpg",
                  },
                  {
                    id: 2,
                    cover: "~/images/food/burger/burger2.jpg",
                  },
                  {
                    id: 3,
                    cover: "~/images/food/burger/burger3.jpg",
                  },
                  {
                    id: 4,
                    cover: "~/images/food/burger/burger4.jpg",
                  },
                  {
                    id: 5,
                    cover: "~/images/food/burger/burger5.jpg",
                  },
                  {
                    id: 6,
                    cover: "~/images/food/burger/burger6.jpg",
                  }
                ],
            },
            {
                id: 8,
                cover: "~/images/food/beer640.jpg",
                category: "מנות ילדים",
                count: "7",
                products: [
                  {
                    id: 0,
                    cover: "~/images/food/burger/burger1.jpg",
                  },
                  {
                    id: 1,
                    cover: "~/images/food/burger/burger1.jpg",
                  },
                  {
                    id: 2,
                    cover: "~/images/food/burger/burger2.jpg",
                  },
                  {
                    id: 3,
                    cover: "~/images/food/burger/burger3.jpg",
                  },
                  {
                    id: 4,
                    cover: "~/images/food/burger/burger4.jpg",
                  },
                  {
                    id: 5,
                    cover: "~/images/food/burger/burger5.jpg",
                  },
                  {
                    id: 6,
                    cover: "~/images/food/burger/burger6.jpg",
                  }
                ],
            },
            {
                id: 9,
                cover: "~/images/food/beer640.jpg",
                category: "קינוחים",
                count: "7",
                products: [
                  {
                    id: 0,
                    cover: "~/images/food/burger/burger1.jpg",
                  },
                  {
                    id: 1,
                    cover: "~/images/food/burger/burger1.jpg",
                  },
                  {
                    id: 2,
                    cover: "~/images/food/burger/burger2.jpg",
                  },
                  {
                    id: 3,
                    cover: "~/images/food/burger/burger3.jpg",
                  },
                  {
                    id: 4,
                    cover: "~/images/food/burger/burger4.jpg",
                  },
                  {
                    id: 5,
                    cover: "~/images/food/burger/burger5.jpg",
                  },
                  {
                    id: 6,
                    cover: "~/images/food/burger/burger6.jpg",
                  }
                ],
            },
        ];
    }
}