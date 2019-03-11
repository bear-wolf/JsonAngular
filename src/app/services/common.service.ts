import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable()
export class CommonService{

    constructor(public http: HttpClient) { }

    // getAll<T extends Search>(search: iFilter, pagination?: Pagination):Observable<T>{
    //     let json = {
    //         'Filter' : search['Filter'] ? search['Filter'] : {}
    //     };
    //
    //     if (!search['Filter'] && (search.TextSearch || search.TextSearch === '')) {
    //         json['Filter']['Value'] = encodeURI(search.TextSearch);
    //     }
    //
    //     if (pagination) {
    //         pagination.prepareDataForQuery(json);
    //     }
    //
    //     return this.http.post<T>(search.entitySearch, json, {});
    // }
}
