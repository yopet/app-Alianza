import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpResponse,
} from '@angular/common/http';
import { EMPTY, Observable, catchError, map, tap, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class JwtInterceptor implements HttpInterceptor {
  constructor(private readonly router: Router) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // add auth header with jwt if account is logged in and request is to the api url
    const token = localStorage.getItem('token');
    if (token && request.url.indexOf('api/security/oauth/token') === -1) {
      request = request.clone({
        setHeaders: { Authorization: `Bearer ${token}` },
      });
    }

    // return next.handle(request);
       
    
  /*  return next.handle(request).pipe(
      tap(
        () => {},
        (err: any) => {
          if (err instanceof HttpErrorResponse) {
            if (err.status !== 401) {
              return;
            }
            this.router.navigate(['login']);
          }
        }
      )
    );*/
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
      
        if ([401, 403].includes(error.status)) {
          this.router.navigate(['login']);
        }

        return throwError(() => error);
      })
    );
  }
}
