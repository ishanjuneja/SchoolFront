import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from '../../node_modules/rxjs';
import { catchError } from '../../node_modules/rxjs/operators';
import { Router } from '@angular/router';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private router: Router, private toast: ToastrService) {

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (sessionStorage.getItem('token') != null) {
            req = req.clone({
                setHeaders: {
                    'Content-Type': 'application/json; charset=utf-8',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${sessionStorage.getItem('token')}`,
                },
            });
        }

        return next.handle(req).pipe(catchError(err => {
            if (err.status === 401) {
                this.toast.error('', 'Session Timed Out', {
                    timeOut: 3000
                });
                this.router.navigate(['/']);
            }
            return throwError(err);;
        }))
    }
}