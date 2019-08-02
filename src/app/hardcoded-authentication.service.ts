import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username, password){
    if (username==="ayoub" && password==="dummy"){
      sessionStorage.setItem('authenticaterUser', username);
      return true;
    }
    return false;
  }
  
  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticaterUser')
    return !(user === null)
  }


}
