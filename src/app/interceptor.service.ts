import { HttpErrorResponse, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { CkeditorService } from './userData.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements InterceptorService{

  constructor(private ckeditor:CkeditorService){ }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>  {  
    const token = this.ckeditor.getAuthToken();
    console.log('tokennn',token)
    if(token){

      request = request.clone({
        setHeaders: {'x-access-token': ` ${token}`}
     });



  
    }

    return next.handle(request).pipe(
      catchError((err) => {
        if (err instanceof HttpErrorResponse) {
            if (err.status === 401) {
            // redirect user to the logout page
         }
      }
      return throwError(err);
    })
     )
  }
}
