import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ExosComponent} from "./exos.component";
import {ChronoComponent} from "./chrono/chrono.component";
import {ShoppingCartV1Component} from "./shopping-cart-v1/shopping-cart-v1.component";

const routes: Routes = [
  {path: '', component: ExosComponent, children: [
      {path: 'chrono', component: ChronoComponent},
      {path: 'shopping-cartV1', component: ShoppingCartV1Component}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExosRoutingModule { }
