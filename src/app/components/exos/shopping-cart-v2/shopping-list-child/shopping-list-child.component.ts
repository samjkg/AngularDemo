import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ICartEntry, IDisplayItem} from "../shopping-list-parent/shopping-list-parent.component";






@Component({
  selector: 'app-shopping-list-child',
  templateUrl: './shopping-list-child.component.html',
  styleUrls: ['./shopping-list-child.component.scss']
})
export class ShoppingListChildComponent {

  @Input() name : string = "";
  @Input() id : number = 0;
  @Input() url : string = "";
  @Input() price : number = 0;



  @Output() addToCartRequest: EventEmitter<number> = new EventEmitter<number>();
  AddToCart(itemId: number) {
    this.addToCartRequest.emit(itemId)
  }

}
