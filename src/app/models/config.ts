export interface iConfiguration {
    host: string,
    accessServers: boolean;
    production: boolean;
    sub_way: string;
    pagination: {};
    filter: {};
}

export class Configuration {
    static host = '';
    static accessServers = false; // false - 1 server, true - many servers
    static production = false;
    static sub_way = '';
    static pagination:{} = null;
    static filter:{} = null;

    constructor() {

    }

    static reWrite(data: iConfiguration){
        Configuration.host = data.host;
        Configuration.accessServers = data.accessServers;
        Configuration.production = data.production;
        Configuration.sub_way = data.sub_way;
        Configuration.pagination = data.pagination;
        Configuration.filter = data.filter;
    }
};

