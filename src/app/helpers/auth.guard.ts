import { Injectable, inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  authService = inject(AuthService);
  router = inject(Router);

  canActivate() {
    this.authService.user$.subscribe((user) => {
      console.log('User', user);
      if(user) {
        this.authService.currentUserSig.set({
          email: user.email!,
          username: user.displayName!,
        });
        return true;
      } else {
        this.authService.currentUserSig.set(null);
        this.router.navigateByUrl('/login');
        return false;
      }
      // console.log(this.authService.currentUserSig());
    })
  }
}