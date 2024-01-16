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
import { FinalizeCartComponent } from './shopping-cart-v3/finalize-cart/finalize-cart.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ReactiveFormsExerciseComponent } from './reactive-forms-exercise/reactive-forms-exercise.component';
import { FireshipFormComponent } from './fireship-form/fireship-form.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatListModule} from "@angular/material/list";
import { FireshipFormV2Component } from './fireship-form-v2/fireship-form-v2.component';
import { FireshipFormV3Component } from './fireship-form-v3/fireship-form-v3.component';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    ExosComponent,
    ChronoComponent,
    ShoppingCartV1Component,
    TransformNumToStringPipe,
    ShoppingListParentComponent,
    ShoppingListChildComponent,
    ShoppingCartV3Component,
    FinalizeCartComponent,
    ReactiveFormsExerciseComponent,
    FireshipFormComponent,
    FireshipFormV2Component,
    FireshipFormV3Component,
  ],
  imports: [
    CommonModule,
    ExosRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatListModule,
    MatCheckboxModule,
    MatButtonModule
  ]
})
export class ExosModule { }
