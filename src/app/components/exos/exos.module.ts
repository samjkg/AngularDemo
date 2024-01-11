import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExosRoutingModule } from './exos-routing.module';
import { ExosComponent } from './exos.component';
import { ChronoComponent } from './chrono/chrono.component';
import { ShoppingCartV1Component } from './shopping-cart-v1/shopping-cart-v1.component';
import { TransformNumToStringPipe } from './shopping-cart-v1/transform-num-to-string.pipe';


@NgModule({
  declarations: [
    ExosComponent,
    ChronoComponent,
    ShoppingCartV1Component,
    TransformNumToStringPipe
  ],
  imports: [
    CommonModule,
    ExosRoutingModule
  ]
})
export class ExosModule { }
