import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../../services/authorization.service';
import { ValidateService } from '../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: String;
  password: String;


  constructor(private authService: AuthorizationService,
  private validate: ValidateService,
  private flashMessage: FlashMessagesService,
  private router: Router) { }

  ngOnInit() {
  }


  onLoginSubmit() {
    var user = {};
    user["email"] = this.email;
    user["password"] = this.password;

    if(this.validate.validateLogin(user)){
      this.authService.loginUser(user).subscribe(data => {
        if(data.success) {
          this.authService.storeUserData(data.token, data.user);
          this.router.navigate(['/profile']);
        }
        else {
          console.log("login failed");
        }
      });
    }
    else {
      console.log("not a valid user");
      if(!this.validate.validateEmail(this.email)){
        this.flashMessage.show('Not a valid email address', {cssClass: 'alert-danger', timeout: 3000});
      }

      if(this.validate.isUndefined(this.password) || !this.validate.requiredLength(this.password, 0)){

        this.flashMessage.show('Please enter a password', {cssClass: 'alert-danger', timeout: 3000});
      }
    }
  }
}
