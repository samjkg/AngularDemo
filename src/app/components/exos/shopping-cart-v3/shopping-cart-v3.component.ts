import { Component } from '@angular/core';
import {ICart, ICartEntry, ShoppingServiceService} from "../shopping-service.service";
import {IDisplayItem} from "../shopping-cart-v2/shopping-list-parent/shopping-list-parent.component";
import {FinalizeCartComponent} from "./finalize-cart/finalize-cart.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-shopping-cart-v3',
  templateUrl: './shopping-cart-v3.component.html',
  styleUrls: ['./shopping-cart-v3.component.scss']
})
export class ShoppingCartV3Component {

  itemList : IDisplayItem[];

  cart : ICart;

  constructor(private _shoppingService : ShoppingServiceService, private router : Router) {
    this.itemList = this._shoppingService.itemList;
    this.cart = this._shoppingService.cart;
  }

  protected readonly FinalizeCartComponent = FinalizeCartComponent;

  navigateToFinalize() {

    localStorage.removeItem("cart-content");

    let toReturn : ICartEntry[] = [];

    for (let i : number = 0; i < this.cart.itemList.length; i++) {
      toReturn.push(this.cart.itemList[i]);
    }

    localStorage.setItem("cart-content", JSON.stringify(toReturn));

    this.router.navigate(['exos//finalize-cart']);
  }

}
