import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { switchMap } from "rxjs/operators";
import { PageRoute } from "nativescript-angular/router";
import { Item } from "../data/item.model";
import { Page } from "tns-core-modules/ui/page/page";
import { DataService } from "../data/data.service";

@Component({
    selector: "ns-details",
    moduleId: module.id,
    templateUrl: "./details.component.html",
    styleUrls: ['./details.component.css']
})

export class DetailsComponent implements OnInit {
    itemId: number;
    categoryId: number;
    item: Item;
    constructor(
        private pageRoute: PageRoute,
        private routerExtensions: RouterExtensions,
        private page: Page,
        private dataService: DataService) {

        this.page.actionBarHidden = true;

        this.pageRoute.activatedRoute.pipe(
            switchMap(activatedRoute => activatedRoute.params)
        ).forEach((params) => {
            this.itemId = +params["itemId"];
            this.categoryId = +params["categoryId"];
            this.item = this.dataService.getItem(this.categoryId, this.itemId);
        });
    }

    ngOnInit(): void {
    }

    toggleLike() {
        this.item.isLike = !this.item.isLike;
        if (this.item.isLike) {
            this.item.likes += 1;
        } else {
            this.item.likes -= 1;
        }
    }

    toggleHeart(item) {
        item.isFavorite = !item.isFavorite;
    }

    categoryIcon() {
        return String.fromCharCode(61549); //"fa-fire";
    }

    closeTap(): void {
        this.routerExtensions.back();
    }

}
