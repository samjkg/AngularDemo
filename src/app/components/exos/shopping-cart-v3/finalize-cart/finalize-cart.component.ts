import {Component, OnInit} from '@angular/core';
import {ICartEntry} from "../../shopping-service.service";

@Component({
  selector: 'app-finalize-cart',
  templateUrl: './finalize-cart.component.html',
  styleUrls: ['./finalize-cart.component.scss']
})
export class FinalizeCartComponent implements OnInit{

  finalCartContent: ICartEntry[] = [];
  rawData : ICartEntry[] = [];  // Declare it as the actual type

  ngOnInit() {
    const item = localStorage.getItem('cart-content');
    try {
      this.rawData = item ? JSON.parse(item) : [];
    } catch(err) {
      console.error('Failed to parse cart-content', err);
      this.rawData = [];
    }
  }

  calculateTotal() : number {
    let total = 0;

    this.rawData.forEach((item) => {
      total += item.amount * item.itemPrice;
    });

    return total;
  }

}
