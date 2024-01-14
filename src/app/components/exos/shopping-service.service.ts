import { Injectable } from '@angular/core';



export interface IDisplayItem {
  itemID : number;
  imgUrl : string;
  itemPrice : number;
  itemName : string;

  AddToCart(cart : ICart) : void;
}

export interface ICartEntry {
  itemID : number;
  itemName : string;

  amount : number;
  itemPrice : number;
}

export class CartEntry implements ICartEntry {
  itemID: number;
  itemName : string;
  amount: number;
  itemPrice: number;

  constructor(name : string, id : number, amount : number, price : number) {
    this.itemName = name;
    this.itemID = id;
    this.amount = amount;
    this.itemPrice = price;
  }
}

export interface  ICart {
  itemList : ICartEntry[];
  totalAmount : number;

  AddOne(displayItem : IDisplayItem) : void;
  RemoveOne(cartEntry : ICartEntry) : void;
  RefreshCart() : void;
}

export class Cart implements ICart {
  itemList: ICartEntry[];
  totalAmount: number;

  constructor() {
    this.itemList = [];
    this.totalAmount = 0;
  }
  AddOne(displayItem: IDisplayItem): void {
    let alreadyIn : boolean = false;
    let index : number = 0;

    for (let i : number = 0; i < this.itemList.length; i++) {
      if (this.itemList[i].itemID === displayItem.itemID) {
        alreadyIn = true;
        index = i;
      }
    }

    if (alreadyIn) {
      this.itemList[index].amount++
    }
    else {
      this.itemList = [...this.itemList, new CartEntry(displayItem.itemName, displayItem.itemID, 1, displayItem.itemPrice)];
    }

    this.totalAmount += displayItem.itemPrice;
  }
  /**
   * Removes one item from the cart.
   *
   * @param {ICartEntry} cartEntry - The cart entry to be removed.
   * @returns {void}
   */
  RemoveOne(cartEntry: ICartEntry): void {

    let index : number = 0;

    for (let i : number = 0; i < this.itemList.length; i++) {
      if (this.itemList[i].itemID === cartEntry.itemID) {
        index = i;
      }
    }

    if (--this.itemList[index].amount === 0) {
      this.itemList.splice(index, 1);
    }

    this.totalAmount -= cartEntry.itemPrice;

  }
  RefreshCart(): void {
    throw new Error('Method not implemented.');
  }

}

export class DisplayItem implements IDisplayItem {
  itemID: number;
  imgUrl: string;
  itemPrice: number;
  itemName: string;

  constructor(id : number, url : string, price : number, name : string) {
    this.itemID = id;
    this.imgUrl = url;
    this.itemPrice = price;
    this.itemName = name;
  }
  AddToCart(cart : ICart): void {
    cart.AddOne(this);
  }

}



@Injectable({
  providedIn: 'root'
})
export class ShoppingServiceService {

  itemList : IDisplayItem[] = [
    new DisplayItem(0, "./assets/img/1.png", 3.49, "Deluxe coffee maker"),
    new DisplayItem(1, "./assets/img/2.png", 5.19, "Bluetooth Speaker"),
    new DisplayItem(2, "./assets/img/3.png", 1.49, "Prime Rolex"),
    new DisplayItem(3, "./assets/img/4.png", 6, "Premium Headset"),
    new DisplayItem(4, "./assets/img/5.png", 2.49, "Chrome Toaster")
  ];

  cart : ICart = new Cart();

}
