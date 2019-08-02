import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = "ayoub";
  password= "";
  errorMessage= 'Invalid Credentials';
  invalidLogin = false;

  constructor(private router: Router, 
    private hardcodedAuthenticationService: HardcodedAuthenticationService) 
  {

  }

  ngOnInit() {
  }

  handleClick(){
    if (this.hardcodedAuthenticationService.authenticate(this.username, this.password))
    {
      this.invalidLogin = false;
      // this.router.navigate(['welcome']);
      this.router.navigate(['welcome', this.username]);  
    }
    else{
      this.invalidLogin = true;
    }
  }

}
