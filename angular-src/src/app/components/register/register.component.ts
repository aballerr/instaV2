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

  constructor(private _flashMessage: FlashMessagesService,
    private _validate: ValidateService,
    private _router: Router,
    private authService: AuthorizationService) { }

  ngOnInit() {
  }


  onRegisterSubmit() {
    var user = {};

    user["email"] = this.email;
    user["password"] = this.password;

    if(this._validate.validateRegister(user, this.confirmPassword)){

      this.authService.registerUser(user).subscribe(data => {
        if(data.success){
          this._flashMessage.show('Registration successful!', {cssClass: 'alert-success', timeout: 3000});
        }
        else {
          this._flashMessage.show('User already exists', {cssClass: 'alert-danger', timeout: 3000});
        }
      })
      this._router.navigate(['/login']);
    }
    else {
      if(!this._validate.validatePasswordsMatch(this.password, this.confirmPassword)){
        this._flashMessage.show('Passwords need to match', {cssClass: 'alert-danger', timeout: 3000});
      }
      if(!this._validate.validateEmail(this.email)) {
        this._flashMessage.show('Not a valid email address', {cssClass: 'alert-danger', timeout: 3000});
      }
      if(!this._validate.requiredLength(this.password, 6)){
        this._flashMessage.show('Password need to be longer', {cssClass: 'alert-danger', timeout: 3000});
      }
      this._router.navigate(['login']);
    }
  }
}
