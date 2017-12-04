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


  validateRegister(user, passwordConfirmation, address) {
    if(this.isUndefined(user.email) || this.isUndefined(user.password) || this.isUndefined(passwordConfirmation) || this.isUndefined(address)){
      return false;
    }
    else if (!this.validatePasswordsMatch(user.password, passwordConfirmation)){
      return false;
    }
    else if (address.length == 0 || user.password.length < 6) {
      return false;
    }
    else {

      return this.validateEmail(user.email);
    }
  }

  requiredLength(value, length){

    return value.length > length;
  }

  //user should have both a valid email (doesn't need to be regisetered) and password as input
  validateLogin(user){

    return !this.isUndefined(user.email) && this.validateEmail(user.email) && !this.isUndefined(user.password) &&
    this.requiredLength(user.password, 0);
  }


}
