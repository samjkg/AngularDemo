import { Component } from '@angular/core';
import {ICart, ShoppingServiceService} from "../shopping-service.service";
import {IDisplayItem} from "../shopping-cart-v2/shopping-list-parent/shopping-list-parent.component";

@Component({
  selector: 'app-shopping-cart-v3',
  templateUrl: './shopping-cart-v3.component.html',
  styleUrls: ['./shopping-cart-v3.component.scss']
})
export class ShoppingCartV3Component {

  itemList : IDisplayItem[];

  cart : ICart;

  constructor(private _shoppingService : ShoppingServiceService) {
    this.itemList = this._shoppingService.itemList;
    this.cart = this._shoppingService.cart;
  }

}
