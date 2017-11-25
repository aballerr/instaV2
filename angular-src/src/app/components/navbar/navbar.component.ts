import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthorizationService } from '../../services/authorization.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthorizationService,
    private flashMessage: FlashMessagesService) { }

  ngOnInit() {
  }


  onLogoutClick() {
    this.authService.logout();
    this.flashMessage.show('You are logged out', {
     cssClass: 'alert-success',
     timeout: 3000
   });
  }

}
