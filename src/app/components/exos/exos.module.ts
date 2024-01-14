import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExosRoutingModule } from './exos-routing.module';
import { ExosComponent } from './exos.component';
import { ChronoComponent } from './chrono/chrono.component';
import { ShoppingCartV1Component } from './shopping-cart-v1/shopping-cart-v1.component';
import { TransformNumToStringPipe } from './shopping-cart-v1/transform-num-to-string.pipe';
import { ShoppingListParentComponent } from './shopping-cart-v2/shopping-list-parent/shopping-list-parent.component';
import { ShoppingListChildComponent } from './shopping-cart-v2/shopping-list-child/shopping-list-child.component';
import { ShoppingCartV3Component } from './shopping-cart-v3/shopping-cart-v3.component';


@NgModule({
  declarations: [
    ExosComponent,
    ChronoComponent,
    ShoppingCartV1Component,
    TransformNumToStringPipe,
    ShoppingListParentComponent,
    ShoppingListChildComponent,
    ShoppingCartV3Component,
  ],
  imports: [
    CommonModule,
    ExosRoutingModule
  ]
})
export class ExosModule { }
