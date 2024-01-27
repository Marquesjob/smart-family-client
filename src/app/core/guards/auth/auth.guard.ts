import { Injectable, inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
class AuthService {

  //TODO - Criar fluxo de validação do usuário

  constructor(private router: Router) {}

  canActivate(): boolean {
    
    let valid = false;

    if(valid) {

      return true;

    } else {

      this.router.navigate(['/auth/login']);

      return false;
    }

  }

}

export const AuthGuard: CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean => {

  return inject(AuthService).canActivate();

}