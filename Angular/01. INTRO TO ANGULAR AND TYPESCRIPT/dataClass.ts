class DataRequest {
    method: string;
    uri: string;
    version: string;
    message: string;
    response: string = 'undefined';
    fulfilled: boolean = false;

    constructor(method: string, uri: string, version: string, message: string) {
        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;
    }

    toString() {
        return `{ method: ${this.method},\nuri: "${this.uri}",\nversion: ${this.version},\nmessage: ${this.message},\nresponse: ${this.response},\nfulfilled: ${this.fulfilled}}`;
    }
}

let myData : DataRequest = new DataRequest('GET', 'http://google.com', 'HTTP/1.1', '');