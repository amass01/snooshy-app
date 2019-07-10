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
            cover: "~/images/food/specials/special2.jpg",
            name: "פצצות שרימפס",
            description: "כדורי שרימפס מטוגנים שתמצאו רק אצלנו",
            categoryName: "מיוחדים",
          },
          {
            id: 3,
            cover: "~/images/food/rashunut/nagets.jpg",
            name: "נאגטס עוף",
            description: "רצועות עוף בציפוי קרנצ'י ורוטב חמוץ מתוק",
            categoryName: "ראשונות",
            price: "25",
          },
          {
            id: 4,
            cover: "~/images/food/rashunut/roll.jpg",
            name: "אגרול",
            categoryName: "ראשונות",
            description: "אגרול צמחוני עם רוטב חמוץ מתוק",
            price: "15",
          },
          {
            id: 5,
            cover: "~/images/food/rashunut/sabecha-salamon.jpg",
            name: "סביצ'ה סלמון",
            categoryName: "ראשונות",
            description: "קוביות סלמון, שירי, פטרוזליה, בצל סגול, נענע ובלסמי",
            price: "30",
          },
          {
            id: 6,
            cover: "~/images/food/rashunut/tuna.jpg",
            name: "ברוסקטה טונה",
            categoryName: "ראשונות",
            description: "שירי צבעוני, בצל ירוק, פטרוזליה, נענע, איולי לימון וטונה צרונה",
            price: "30",
          }, {
            id: 7,
            cover: "~/images/food/rashunut/tuna.jpg",
            name: "טרטר סלמון",
            categoryName: "ראשונות",
            description: "טרטר סלמון עם אבוקדו, עירית, טמפורה קרנצ'ית ופונזו",
            price: "35",
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
            description: "שירי, בצל ירוק, פטרוזליה, נענע, עלי בייבי, צנונית, אבוקדו, מוגש עם שיפוד קלמרי, מול, שרימפס ודג לבן בציפוי טמפורה",
            price: "40",
          },
          {
            id: 1,
            cover: "~/images/food/salads/p-salad.jpg",
            name: "סלט פפאיה חריף",
            categoryName: "סלטים",
            description: "רצועות פפאיה, עגבניות שרי נענע, כוסברה, בוטנים, וצ'ילי חריף",
            price: "30",
          },
          {
            id: 2,
            cover: "~/images/food/salads/fries-salad.jpg",
            name: "סלט הומפרייז",
            categoryName: "סלטים",
            description: "תערובת עלים, עגבניות שרי, בצל, צנונית, מלפפון, אבוקדו, וקוביות תפוח אדמה ופטריות ברוטב צ'ילי מתוק",
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
            description: "עוף | בקר | שרימפס",
            categoryName: "מוקפצים",
            price: "40",
          },
          {
            id: 1,
            cover: "~/images/food/woks/noodels.jpg",
            name: "נודלס",
            categoryName: "מוקפצים",
            description: "עוף | בקר | שרימפס | עוף פריך | קלמרי פריך | צמחוני => 30 שקל",
            price: "40",
          },
          {
            id: 2,
            cover: "~/images/food/default.jpg",
            name: "מנות אורז",
            categoryName: "מוקפצים",
            description: "עוף | בקר | שרימפס | צמחוני => 30 שקל",
            price: "40",
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
          description: "שאל את המלצר",
          price: "35",
        }, {
          id: 1,
          cover: "~/images/food/seafood/shrimps-fried.jpg",
          name: "שרימפס מטוגן",
          categoryName: "דגים ופירות ים",
          description:  "שאל את המלצר",
          price: "45",
        }, {
          id: 2,
          cover: "~/images/food/seafood/crispy-fish.jpg",
          name: "ברבוניות מוזהבות",
          categoryName: "דגים ופירות ים",
          description:  "שאל את המלצר",
          price: "40",
        }, {
          id: 3,
          cover: "~/images/food/default.jpg",
          name: "מולים",
          categoryName: "דגים ופירות ים",
          description:  "שאל את המלצר",
          price: "50",
        }, {
          id: 4,
          cover: "~/images/food/seafood/special.jpg",
          name: "מיקס מטוגנים",
          categoryName: "דגים ופירות ים",
          description:  "שאל את המלצר",
          price: "80",
        },
        ],
      }, {
        id: 4,
        category: "מיוחדים",
        products: [{
          id: 0,
          cover: "~/images/food/specials/special1.jpg",
          name: "קארי ירוק חריף",
          categoryName: "מיוחדים",
          description:  "ברוקלי, אפונה, אספרגוס, פאקצ'יו ברוטב קרם קוקוס וקארי ירוק חריף עם: בקר | עוף | שריימפס | פירות ים => 70 שקלים ",
          price: "55",
        }, {
          id: 1,
          cover: "~/images/food/specials/rise-seafood.jpg",
          name: "אורז פירות ים",
          categoryName: "מיוחדים",
          description:  "אורז מוקפץ ברוטב חמאה, שום, זעפרן, שירי, אפונה, בצל ופירות ים",
          price: "70",
        }, {
          id: 2,
          cover: "~/images/food/specials/pasta-seafood.jpg",
          name: "פסטה פירות ים",
          categoryName: "מיוחדים",
          description:  "שאל את המלצר",
          price: "70",
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
            description:  "דג | בקר מפורק | שרימפס | עוף",
            price: "שלוש יחידות באן + הומפרייז | סלט ירוק => 40 \n שתי יחידות באן + הומפרייז | סלט ירוק => 30",
          },
          {
            id: 1,
            cover: "~/images/food/steamed/dim-sam.jpg",
            name: "דים סאם",
            categoryName: "מאודים",
            description:  "בקר | עוף | עוף",
            price:  "יחידה ב-5",
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
            description:  "רצועות דג לבן בציפוי טמפורה וצ'יפס",
            price:  "30",
          },
          {
            id: 1,
            cover: "~/images/food/kids/noodels.jpg",
            name: "נודלס עוף ילדים",
            categoryName: "מנות ילדים",
            description:  "נודלס מוקפץ עם ירקות ורצועות עוף חמוץ מתוק",
            price:  "30",
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
            description:  "בצק פילו במילוי בננה ושוקולד",
            price:  "15",
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