import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BindingsComponent } from './bindings/bindings.component';
import { DemosComponent } from './demos.component';
import {RouterOutlet} from "@angular/router";
import {DemosRoutingModule} from "./demos-routing.module";
import {FormsModule} from "@angular/forms";
import { PipesComponent } from './pipes/pipes.component';
import { TempConvertPipe } from './pipes/temp-convert.pipe';
import { DirectivesComponent } from './directives/directives.component';
import { ParentComponent } from './input-ouput/parent/parent.component';
import { EnfantComponent } from './input-ouput/enfant/enfant.component';
import { FakeAuthExerciseComponent } from './fake-auth-exercise/fake-auth-exercise.component';



@NgModule({
  declarations: [
    BindingsComponent,
    DemosComponent,
    PipesComponent,
    TempConvertPipe,
    DirectivesComponent,
    ParentComponent,
    EnfantComponent,
    FakeAuthExerciseComponent,
  ],
  imports: [
    CommonModule,
    DemosRoutingModule,
    RouterOutlet,
    FormsModule
  ]
})
export class DemosModule { }
