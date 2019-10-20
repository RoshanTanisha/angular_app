import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from "rxjs";
import { LoginDetails, SignUpDetails } from "src/app/UserDetails";
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CredentialsService {

  private loginUrl = 'http://localhost:8000/api/login';
  private signupUrl = 'http://localhost:8000/api/signup';

  constructor(private http: HttpClient) { }

  login(data: LoginDetails): Observable<any>{
    const jsonData = data.stringify();
    return this.http.post(
      this.loginUrl,
      jsonData,
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
  signup(data: SignUpDetails): Observable<any> {
    const jsonData = data.stringify();
    console.log(jsonData);
    const returnValue = this.http.post(
      this.signupUrl,
      jsonData,
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
    return returnValue;
  }

  handleError(error: HttpErrorResponse) {
    console.log('error has occured: ', error);
    return throwError(error.message || 'Server error');
  }
}
