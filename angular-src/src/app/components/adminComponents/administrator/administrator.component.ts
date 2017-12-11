import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.css']
})
export class AdministratorComponent implements OnInit {
  private password: string;
  private email: string;
  private baseURL: string = "http://localhost:3000/";
  private authToken: string;
  private users: any;
  private approved = [];

  constructor(private http: Http) { }



  onLoginSubmit() {
    var requestURL = this.baseURL + "admin/authenticate";
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    var admin = {
      email: this.email,
      password: this.password
    }
    this.http.post(requestURL, admin, {headers: headers}).map(res => res.json()).subscribe(data => {
      if(data.success){

        localStorage.setItem('admin_token', data.token);
        this.loadToken();
      }
      else {
        console.log(data.success);
      }
    });
  }


  loadToken(){
    this.authToken = localStorage.getItem('admin_token');
  }

  loadUsers(){
    var requestURL = this.baseURL + "admin/userRequests";
    let headers = new Headers();
    this.loadToken();

    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    this.http.get(requestURL, {headers: headers})
    .map(res => res.json()).subscribe(data => {
      console.log(data);
      this.users = data;
    })
  }


  //returns whether admin user is logged in or not
  notLoggedIn(){
    if(localStorage.getItem('admin_token')){
      return false;
    }
    return true;
  }

  logout() {
    localStorage.clear();
  }

  //when approved, add them to list of approved users
  approve(user: any) {
    var requestURL = this.baseURL + "admin/approveUsers";
    let headers = new Headers();
    this.loadToken();

    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');


    if(this.approved.indexOf(user) < 0){
      this.approved.push(user);
    }

    this.users.splice(this.users.indexOf(user), 1);
  }

  //send data back to server to update the list of approved users
  submitApproved() {
    for(var i in this.approved){
      console.log(this.approved[i]);
    }
  }



  ngOnInit() {
  }

}
