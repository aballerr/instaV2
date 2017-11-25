import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

  constructor() { }

  isUndefined(value){
    return value == undefined
  }

  //Regex to validate a proper email address
  validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  //Making sure that the passwords inputed by the users match
  validatePasswordsMatch(password, passwordConfirmation) {
    return password == passwordConfirmation;
  }


  validateRegister(user, passwordConfirmation) {
    if(this.isUndefined(user.email) || this.isUndefined(user.password) || this.isUndefined(passwordConfirmation)){
      return false;
    }
    else if (!this.validatePasswordsMatch(user.password, passwordConfirmation)){
      return false;
    }
    else {
      return this.validateEmail(user.email);
    }
  }

  requiredLength(password, length){
    return password.length > length;
  }

  //user should have both a valid email (doesn't need to be regisetered) and password as input
  validateLogin(user){

    return !this.isUndefined(user.email) && this.validateEmail(user.email) && !this.isUndefined(user.password) &&
    this.requiredLength(user.password, 0);
  }


}
