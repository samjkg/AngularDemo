import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ExosComponent} from "./exos.component";
import {ChronoComponent} from "./chrono/chrono.component";
import {ShoppingCartV1Component} from "./shopping-cart-v1/shopping-cart-v1.component";
import {ShoppingListParentComponent} from "./shopping-cart-v2/shopping-list-parent/shopping-list-parent.component";
import {ShoppingCartV3Component} from "./shopping-cart-v3/shopping-cart-v3.component";
import {FinalizeCartComponent} from "./shopping-cart-v3/finalize-cart/finalize-cart.component";
import {ReactiveFormsExerciseComponent} from "./reactive-forms-exercise/reactive-forms-exercise.component";
import {FireshipFormComponent} from "./fireship-form/fireship-form.component";
import {FireshipFormV2Component} from "./fireship-form-v2/fireship-form-v2.component";
import {FireshipFormV3Component} from "./fireship-form-v3/fireship-form-v3.component";

const routes: Routes = [
  {path: '', component: ExosComponent, children: [
      {path: 'chrono', component: ChronoComponent},
      {path: 'shopping-cartV1', component: ShoppingCartV1Component},
      {path: 'shopping-list-parent', component: ShoppingListParentComponent},
      {path: 'shopping-cart-v3', component: ShoppingCartV3Component},
      {path: 'finalize-cart', component: FinalizeCartComponent},
      {path: 'reactive-forms-exercise', component: ReactiveFormsExerciseComponent},
      {path: 'fireship-form', component: FireshipFormComponent},
      {path: 'fireship-form-v2', component: FireshipFormV2Component},
      {path: 'fireship-form-v3', component: FireshipFormV3Component}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExosRoutingModule { }
