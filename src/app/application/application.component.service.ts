import { Injectable, Inject } from '@angular/core';
import {
  HttpModule,
  Http,
  Headers,
  Response,
  RequestOptions
} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Observer } from 'rxjs/Observer';

@Injectable()
export class ApplicationServices {
  private headers: Headers = new Headers({
    'Content-Type': 'application/json'
  });

  constructor(private http: Http) {}

  public getPackages(ecosystem: string): Observable<any> {
    if (ecosystem === 'node') {
      // TODO: node ecosystem;
      const url =
        'https://gist.githubusercontent.com/ravsa/38ed3cab8d7237d7a8c2b608635fbe0d/raw/ffc9f69b6050d96f3d6b86ad7259a77d9263f22a/node_response.json';
      const body: any = {};
      return this.http
        .get(url, body)
        .map(this.extractData)
        .catch(this.handleError);
    } else {
      const url =
        'https://gist.githubusercontent.com/ravsa/dc3445708fc519795d093d9ce44b6698/raw/1ba1d94f5d55307a93b09a78217c536b4c1d7341/springboot_response.json';
      const body: any = {};
      return this.http
        .get(url, body)
        .map(this.extractData)
        .catch(this.handleError);
    }
  }

  private extractData(res: Response) {
    const body = res.json() || {};
    body['statusCode'] = res.status;
    body['statusText'] = res.statusText;
    return body;
  }

  public intialConfig(ecosystem: string) {
    const url =
      'https://gist.githubusercontent.com/ravsa/1db69300892f58ba97b7855a97863684/raw/0d25768e2a619bc2f33a6f0d09cd39d7c7839a5c/initial_config.json';
    const body: any = {};
    return this.http
      .get(url, body)
      .map(this.extractData)
      .catch(this.handleError);
  }
  private handleError(error: Response | any) {
    let body: any = {};
    if (error instanceof Response) {
      if (error && error.status && error.statusText) {
        body = {
          status: error.status,
          statusText: error.statusText
        };
      }
    } else {
      body = {
        statusText: error.message ? error.message : error.toString()
      };
    }
    return Observable.throw(body);
  }
}
