import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Configuration, iConfiguration} from '../models/config';
import { Observable, of, Subject } from 'rxjs';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';

@Injectable()
export class AppSettingsService{
    private config = "./assets/config.json"; // конфиг локально
    //private config = "./Scripts/app/assets/config.json"; // конфиг на сервере

    promise: Promise<any>;
    private status = false;

    constructor(private http: HttpClient) {
        this.promise = this.http.get(this.config, { params: new DisableInterceptor()})
          .pipe(
            map((data: iConfiguration) => this.reWriteConfig(data))
          )
          .toPromise();
    }

    isStatusLoad() {
        return this.status;
    }

    reWriteConfig(data: iConfiguration) {
        Configuration.reWrite(data);
        this.status = true;
    }
}


export class DisableInterceptor extends HttpParams {
  constructor() {
    super();
  }
}
