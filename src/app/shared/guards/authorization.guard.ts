import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {GuardsService} from "../../components/demos/guards/guards.service";
import {Observable} from "rxjs";

export const authorizationGuard: CanActivateFn = () => {

  const authService = inject(GuardsService); // When not in a class, and can't use ctor to inject
  const router : Router = inject(Router);
  const isLoggedIn : Observable<boolean> = authService.isLoggedIn;

  if (!isLoggedIn) {
    router.navigate(['/login']);
  }
  return true;

};
