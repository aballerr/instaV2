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
    private http: Http,
    private router: Router) { }

    ngOnInit() {
      if(this.authService.loggedIn) {
        this.activatedRoute.queryParams.subscribe((params: Params) => {

          localStorage.setItem('code', params.code);
          this.authService.loadToken();



          this.authService.verifyInstagram(params).subscribe(data => {
            this.authService.saveInstagramToken(data);
            this.router.navigate(['/profile']);
          });
          // this.http.post("http://localhost:3000/instagram/token", {params: params}).subscribe((data) => {
          // data = JSON.parse(data["_body"]);
          // var token = data["accessToken"];
          // localStorage.setItem('instagram_token', token);
          //
          // this.router.navigate(['/']);
          // });
        });
      }
    }
  }
