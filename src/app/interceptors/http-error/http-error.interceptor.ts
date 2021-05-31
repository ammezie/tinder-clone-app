import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { MessageComponent } from 'src/app/components/message/message.component';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(private message: MessageComponent) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      retry(1),

      catchError((error: HttpErrorResponse) => {
        let errorMessage = {
          status: error.status,
          message: error.error.message,
          color: 'danger',
        };

        this.message.messageObject = errorMessage;

        return throwError(errorMessage);
      })
    );
  }
}
