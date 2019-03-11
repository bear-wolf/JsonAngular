import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

import {CommonService} from './common.service';
import {Observable} from 'rxjs';

@Injectable()
export class UserService extends CommonService{

    constructor(public http: HttpClient) {
        super(http);
    }

    // getClientDetails(clientId: number):Observable<>{
    //     let json = {
    //         ID: clientId
    //     };
    //
    //     return this.http.post<ClientFullInfo>('clients.get', json) ;
    // }


}
