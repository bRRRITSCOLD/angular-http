import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ServerHttpService {

  constructor(private http: Http) { }

  storeServers(servers: any[]) {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    // return this.http.post('https://angular-http-8904d.firebaseio.com/servers.json', servers, { headers: headers });
    return this.http.put('https://angular-http-8904d.firebaseio.com/servers.json', servers, { headers: headers });
  }

  getServers() {
    return this.http.get('https://angular-http-8904d.firebaseio.com/servers.json').map(
      (response: Response) => {
        const data = response.json();
        return data;
      }
    ).catch(
      (error: Response) => {
        console.log(error);
        return Observable.throw('Something went wrong');
      }
    );
  }

  getAppName() {
    return this.http.get('https://angular-http-8904d.firebaseio.com/appName.json').map(
      (response: Response) => {
        return response.json();
      }
    );
  }
}
