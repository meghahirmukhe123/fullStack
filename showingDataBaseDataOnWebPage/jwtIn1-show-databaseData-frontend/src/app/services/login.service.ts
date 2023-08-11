import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = "http://localhost:8081"

  constructor(private http: HttpClient) { }

  //calling server to generate token

  generateToken(credentials: any) {
    //token generates
    return this.http.post(`${this.url}/token`, credentials);
  }



 

  // generateToken(credentials: any): Observable<any> {
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json',
  //     }),
  //     withCredentials: true  // This line should be inside httpOptions
  //   };
  
  //   return this.http.post(`${this.url}/token`, credentials, httpOptions);
  // }
  



  //for login user
  loginuser(token: string) {
    localStorage.setItem("token", token);
    return true;
  }

  //to chekc whether user is logged in or not
  isLoggedIn() {

    let token = localStorage.getItem("token");
    if (token == undefined || token === '' || token == null) {
      return false;
    }
    else {
      return true;
    }


  }

  //to check user is logged out 
  logout() {
    localStorage.removeItem('token');
    return true;
  }


  //getting token
  getToken() {
    localStorage.getItem('token');
  }
}
