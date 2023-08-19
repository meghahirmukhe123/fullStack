import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
 

  url = 'http://localhost:1005/auth'

  constructor(private http: HttpClient) { }

  // generateToken(user:User):Observable<any> {
  //   console.log("generateToken method", this.http.post(`${this.url}/token`, user));
    
  //   console.log("i got token  "+this.getToken());
  //   return this.http.post(`${this.url}/token`, user);
  // }

  generateToken(credentials: any): Observable<any> {
    return this.http.post(`${this.url}/token`, credentials);
  }


  //for login user
  loginuser(token: string) {
    localStorage.setItem("token", token);
    return true;
  }

  //getting token
  getToken() {
    localStorage.getItem('token');
  }
}
