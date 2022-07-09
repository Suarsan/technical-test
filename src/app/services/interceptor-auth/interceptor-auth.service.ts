import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { throwError } from 'rxjs/internal/observable/throwError';
import { catchError } from 'rxjs/internal/operators/catchError';
import { BrowserStorageService } from 'src/app/modules/browser-storage/browser-storage.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorAuthService implements HttpInterceptor {

  constructor(private browserStorageService: BrowserStorageService,
              private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    let request = req;
    const token = this.browserStorageService.getToken();
    
    if (token) {
      request = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }

    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {
        if (err.status === 401) {
          this.router.navigateByUrl('/signin');
        }
        return throwError( () => new Error(err.message) );
      })
    );
  }
}
