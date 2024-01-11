import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'demos', loadChildren: () =>
    import('./components/demos/demos.module').then(m => m.DemosModule)},
  {path: 'exos', loadChildren: () =>
      import('./components/exos/exos.module').then(m => m.ExosModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
