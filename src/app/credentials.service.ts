import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from "rxjs";
import { LoginDetails, SignUpDetails } from "src/app/UserDetails";
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CredentialsService {

  private _login_url: string = "http://localhost:8000/api/login";
  private _signup_url: string = "http://localhost:8000/api/signup";

  constructor(private _http: HttpClient) { }

  login(data: LoginDetails): Observable<any>{
    let json_data = data.stringify();
    return this._http.post(
      this._login_url, 
      json_data,
      {
        headers: new HttpHeaders(
          {
            'Content-Type': 'application/json'
          }
        )
      }
    )
      .pipe(
        catchError(this.handleError)
      );

  }
  signup(data: SignUpDetails) : Observable<any> {
    let json_data = data.stringify();
    console.log(json_data);
    let return_Value = this._http.post(
      this._signup_url, 
      json_data,
      { 
          headers: new HttpHeaders(
            {
              'Content-Type': 'application/json'
            }
        )
      } 
    )
      .pipe(
        catchError(this.handleError)
      );
    return return_Value;
  }

  handleError(error: HttpErrorResponse) {
    console.log('error has occured: ', error);
    return throwError(error.message || "Server error");
  }
}
