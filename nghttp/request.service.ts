import {Http, RequestOptions, Response, Headers, RequestMethod} from '@angular/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class RequestSender
{
    private version: string = null;
    private authType: string = 'Bearer';
    private accessToken: string;

    constructor(private http: Http) {
    }

    public setAuth(accessToken: string, authType?: string): void {
        if (authType) {
            this.authType = authType;
        }
        this.accessToken = accessToken;
    }

    public send(url: string, options: RequestOptions = new RequestOptions({ method: RequestMethod.Get })): Observable<Response> {
        if (!options.headers) {
            options.headers = new Headers();
        }

        if (options.body) {
            if (!options.method || options.method === RequestMethod.Get) {
                options.method = RequestMethod.Post;
            }
            options.headers.append('Content-Type', 'application/json; charset=UTF-8');
        }
        if (!options.headers.has('X-Version')) {
            options.headers.set('X-Version', String(this.version));
        }
        if (this.accessToken) {
            options.headers.set('Authorization', `${this.authType} ${this.accessToken}`);
        }

        options.headers.append('Accept', 'application/json');
        options.headers.append('Accept-Encoding', 'gzip, deflate');

        const apiEndpoint: string = '/api' + ((url.charAt(0) === '/') ? '': '/') + url;
        return this.http.request(apiEndpoint, options);
    }
}
