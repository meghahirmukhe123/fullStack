import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, map } from 'rxjs';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = 'http://localhost:1005/auth';

  constructor(private http : HttpClient) { }

  
  // generateToken(user:User):Observable<any> 
  // {
  //   console.log('Token '+this.http.post(`${this.url}/token`,user));
  //   return this.http.post(`${this.url}/token`,user);
  // }
  generateToken(user: User): Observable<string> {
    return this.http.post<any>(`${this.url}/token`, user).pipe(
      map((response: any) => {
        const token = response.token;
        console.log('Token:', token); // Log the token
        return token; // Return the token as a string
      })
    );
  }
  

     //for login user
     loginuser(token: string) {
      localStorage.setItem("token", token);
      return true;
    }
  
    //to chekc whether user is logged in or not
    // isLoggedIn() {
  
    //   let token = localStorage.getItem("token");
    //   if (token == undefined || token === '' || token == null) {
    //     return false;
    //   }
    //   else {
    //     return true;
    //   }
  
  
    // }
  
    //to check user is logged out 
    // logout() {
    //   localStorage.removeItem('token');
    //   return true;
    // }
  
  
    //getting token
    getToken() {
      localStorage.getItem('token');
    }

}
