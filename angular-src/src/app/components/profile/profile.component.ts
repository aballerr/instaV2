import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../../services/authorization.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  state:boolean = false;

  constructor(private authService: AuthorizationService) {


  }


  checkToken() {
    this.authService.validateInstagramToken().subscribe(data => {

       if(data["_body"] == "TOKEN STILL VALID"){
         this.state = false;
       }
       else {
         this.state = true;
       }
    });
  }

  ngOnInit() {
    this.checkToken();
  }

}
