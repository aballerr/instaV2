import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { tokenNotExpired } from 'angular2-jwt';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthorizationService {
  private baseURL: string = "http://localhost:3000/";
  authToken: any;
  user: any;
  instagramAccessToken: any;

  constructor(private http: Http) { }


  //Register's user by sending a post request to the server
  registerUser(user){
    var requestURL = this.baseURL + "users/register";
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');


    return this.http.post(requestURL, user, {headers: headers})
    .map(res => res.json());
  }

  //Sends and authentication request to the server and logs the user in
  loginUser(user) {
    var requestURL = this.baseURL + "users/authenticate";
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(requestURL, user, {headers: headers}).map(res => res.json());
  }

  storeUserData(token, user) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

  loadToken(){
    this.authToken = localStorage.getItem('id_token');
  }

  loadInstagramAccessToken(){
    this.instagramAccessToken = localStorage.getItem('instagram_token');
  }

  loadUser(){
    this.user = localStorage.getItem('user');
  }

  // we simple want to verify that the users access token is still valid and if so they're logged in
  loggedIn(){
    this.loadToken();
    return tokenNotExpired('id_token');
  }

  verifyInstagram(params){
    var requestURL = this.baseURL + "instagram/token";
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');

    return this.http.post(requestURL, {params: params}, {headers: headers});
  }

  //This method simply saves their instagram access token
  saveInstagramToken(data){
    var token = data["accessToken"];
    localStorage.setItem('instagram_token', token);
  }

  //we need to validate that their instagram access token is still working, if not we need them to revalidate it
  validateInstagramToken(){
    this.loadInstagramAccessToken();
    var requestURL = this.baseURL + "instagram/validate";
    let params: URLSearchParams = new URLSearchParams();
    params.set('instagramAccessToken', this.instagramAccessToken);
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');

    return this.http.get(requestURL, {headers: headers});
  }

  //This method returns the users profile that is stored in the database
  getProfile(){
    var requestURL = this.baseURL + "users/profile";
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get(requestURL, {headers: headers})
    .map(res => res.json());
  }


}
