import { Component, OnInit } from '@angular/core';
import { CredentialsService } from './../credentials.service';
import { LoginDetails } from "src/app/UserDetails";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  error: string = '';
  data: LoginDetails = new LoginDetails();
  returnedData: any;

  constructor(private _credService: CredentialsService) { }

  ngOnInit() {
  }

  doLogin() {
    this.data.email = this.email;
    this.data.password = this.password;
    this._credService.login(this.data)
      .subscribe(
        data => this.returnedData = data,
        error => this.error = error);
  }
}
