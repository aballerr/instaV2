import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ValidateService } from '../../services/validate.service';
import { Router } from '@angular/router';
import { AuthorizationService } from '../../services/authorization.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email: String;
  password: String;
  confirmPassword: String;
  address: String;

  constructor(private flashMessage: FlashMessagesService,
    private validate: ValidateService,
    private router: Router,
    private authService: AuthorizationService) { }

  ngOnInit() {
  }


  onRegisterSubmit() {
    var user = {};

    user["email"] = this.email;
    user["password"] = this.password;

    if(this.validate.validateRegister(user, this.confirmPassword)){

      this.authService.registerUser(user).subscribe(data => {
        if(data.success){
          this.flashMessage.show('Registration successful!', {cssClass: 'alert-success', timeout: 3000});
        }
        else {
          this.flashMessage.show('User already exists', {cssClass: 'alert-danger', timeout: 3000});
        }
      })
      this.router.navigate(['/login']);
    }
    else {
      if(!this.validate.validatePasswordsMatch(this.password, this.confirmPassword)){
        this.flashMessage.show('Passwords need to match', {cssClass: 'alert-danger', timeout: 3000});
      }
      if(!this.validate.validateEmail(this.email)) {
        this.flashMessage.show('Not a valid email address', {cssClass: 'alert-danger', timeout: 3000});
      }
      if(!this.validate.requiredLength(this.password, 6)){
        this.flashMessage.show('Password need to be longer', {cssClass: 'alert-danger', timeout: 3000});
      }
      this.router.navigate(['login']);
    }
  }
}
