import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class BaseHttpService implements HttpInterceptor {

  constructor(
    private router: Router) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');
    if (token) {
      req = req.clone({
        headers: req.headers.append('Authorization', 'Bearer ' + token)
      });
    }
    return next.handle(req)
      .pipe(tap(
        success => { },
        error => {
          this.errorHandler(error);
        }));
  }

  errorHandler(error: any): any {
    if (error.status === 401 || error.status === 403) {
      localStorage.removeItem('token');
      this.router.navigate(['account/login']);
    }
  }

}
