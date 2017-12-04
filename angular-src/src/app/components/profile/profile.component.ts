import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../../services/authorization.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  isValid:boolean = false;
  pictures: any;
  constructor(private authService: AuthorizationService) {


  }


  checkToken() {
    this.authService.validateInstagramToken().subscribe(data => {
      console.log(data);
       if(data["_body"] == "TOKEN STILL VALID"){
         this.isValid = false;
         this.loadPictures();
       }
       else {
         this.isValid = true;
       }
    });
  }

  loadPictures() {
    this.authService.getProfile().subscribe(data => {
      if(data.user.instagram.pictures){
        this.pictures = data.user.instagram.pictures;
      }
      console.log(data);

    });
  }

  ngOnInit() {
    this.checkToken();
    this.loadPictures();

    // if(!this.isValid){

    // }

  }

}
