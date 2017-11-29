import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../../services/authorization.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private authService: AuthorizationService) { }

  printToken(){
    this.authService.getProfile().subscribe(data => {
      console.log(data);
    })
  }

  ngOnInit() {
  }

}
