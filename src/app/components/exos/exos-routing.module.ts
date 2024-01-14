import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ExosComponent} from "./exos.component";
import {ChronoComponent} from "./chrono/chrono.component";
import {ShoppingCartV1Component} from "./shopping-cart-v1/shopping-cart-v1.component";
import {ShoppingListParentComponent} from "./shopping-cart-v2/shopping-list-parent/shopping-list-parent.component";
import {ShoppingCartV3Component} from "./shopping-cart-v3/shopping-cart-v3.component";

const routes: Routes = [
  {path: '', component: ExosComponent, children: [
      {path: 'chrono', component: ChronoComponent},
      {path: 'shopping-cartV1', component: ShoppingCartV1Component},
      {path: 'shopping-list-parent', component: ShoppingListParentComponent},
      {path: 'shopping-cart-v3', component: ShoppingCartV3Component}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExosRoutingModule { }
