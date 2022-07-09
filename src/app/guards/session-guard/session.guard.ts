import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { BrowserStorageService } from 'src/app/modules/browser-storage/browser-storage.service';

@Injectable({
  providedIn: 'root'
})
export class SessionGuard implements CanActivate {

  constructor(private browserStorageService: BrowserStorageService,
              private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // Insecure. Token validation? Resolver? Check role value against available roles list? Encrypt browserStorage?
      if (this.browserStorageService.getRole() && this.browserStorageService.getToken()) {
        return true;
      }
      this.router.navigate(['signin']);
      return false;
  }
  
}
