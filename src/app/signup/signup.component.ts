import { Component, OnInit } from '@angular/core';
import { SignUpDetails } from "src/app/UserDetails";
import { CredentialsService } from "src/app/credentials.service";

class Data {
  success: boolean;
  message: string;
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  fullName: string;
  email: string;
  password: string;
  data: SignUpDetails;
  err: string;
  returnValue: Data;

  constructor(private userService: CredentialsService) {
    this.data = new SignUpDetails();
  }

  ngOnInit() {
  }

  Signup() {
    this.data.fullName = this.fullName;
    this.data.email = this.email;
    this.data.password = this.password;
    console.log('signup details : ', `${this.data}`);
    console.log(this.userService.signup(this.data)
      .subscribe(data => {
        this.returnValue = data;
        console.log('return Value=', this.returnValue.success === true);
        this.err = undefined;
        },
      error => this.err = error));
  }
}
