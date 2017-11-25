import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { URLSearchParams } from '@angular/http';
import { AuthorizationService } from '../../services/authorization.service';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.css']
})
export class AuthenticateComponent implements OnInit {

  constructor(private authService: AuthorizationService,
    private activatedRoute: ActivatedRoute,
    private http: Http) { }

    ngOnInit() {
      if(this.authService.loggedIn) {
        this.activatedRoute.queryParams.subscribe((params: Params) => {
          console.log(params.code);
          localStorage.setItem('code', params.code);
          console.log(params);
          this.http.post("http://localhost:3000/instagram/token", {params: params}).subscribe((data) => {
          //  var body = JSON.parse(data["_body"]);
          console.log(data);
            //console.log(body.user);
            //  this.authService.storeUser(body.user, body.accessToken);
          });
        });
      }
    }
  }
