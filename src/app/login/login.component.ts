import { Component, OnInit } from '@angular/core';
import { CredentialsService } from './../credentials.service';
import { LoginDetails } from "src/app/UserDetails";

class Status {
  success: boolean;
  message: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';
  error = '';
  data: LoginDetails = new LoginDetails();
  returnedData: Status;

  constructor(private credService: CredentialsService) { }

  ngOnInit() {
  }

  doLogin() {
    this.data.email = this.email;
    this.data.password = this.password;
    this.credService.login(this.data)
      .subscribe(
        data => {
          this.returnedData = data;
        },
        error => this.error = error);
  }
}
