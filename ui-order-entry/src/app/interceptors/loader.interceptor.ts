import {LoaderService} from '../services/loader-service.service';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {finalize} from 'rxjs/operators';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  constructor(public loaderService: LoaderService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!req.url.includes('/categories')) {
      this.loaderService.show();
      console.log('loader interceptor');
      return next.handle(req).pipe(
        finalize(() => setTimeout(() => this.loaderService.hide(), 2000))
      );
    }
    return next.handle(req);
  }
}
