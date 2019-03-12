import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpParams, HttpRequest} from '@angular/common/http';
import {Configuration} from '../../models/config';
import {Observable} from 'rxjs';
import {DisableInterceptor} from '../app-settings.service';

@Injectable()
export class CommonInterceptor implements HttpInterceptor {
    constructor() {
    }


    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const options: { url?: string, params?: any, observe?: 'response', headers?: HttpHeaders, setHeaders?: any } = {};

        options.url = Configuration.host + request.url;

        if (request.params instanceof DisableInterceptor) {
          options.url = request.url;
        }

        request = request.clone(options);

        return next.handle(request);
    }
}
