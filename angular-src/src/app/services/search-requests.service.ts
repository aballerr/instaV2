import { Injectable } from '@angular/core';
import { Http, URLSearchParams, RequestOptions } from '@angular/http';

@Injectable()
export class SearchRequestsService {

  constructor(private http: Http) { }
  private baseURL:string = "http://localhost:3000/";

  //search based on a given address
  search(address) {
    const requestURL = this.baseURL+"google/distance";

    let params: URLSearchParams = new URLSearchParams();
    params.set('address', address);
    let requestOptions = new RequestOptions();
    requestOptions.search = params;

    return this.http.get(requestURL, requestOptions).map(res => res.json());
  }
}
