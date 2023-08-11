import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = 'http://localhost:8081';

  constructor(private http: HttpClient) { }

  // getUser()
  // {
  //  console.log('baseurl'+`${this.baseUrl}/home`);
  //  var data = this.http.get(`${this.baseUrl}/home`, { responseType: 'text' })
  //  console.log('Data found: '+ data);

  //   return this.http.get(`${this.baseUrl}/home`);   

  // }


  //   user:any;
  //   getUser() {
  //   console.log('baseurl: ' + `${this.baseUrl}/home`);

  //   // Make the HTTP request with 'responseType: 'text'' and handle it asynchronously
  //   this.http.get(`${this.baseUrl}/home`, { responseType: 'text' }).subscribe(
  //     user => {
  //       console.log('Data found:', user); // Log the plain text data.

  //     },
  //     (error) => {
  //       console.error('Error fetching data:', error);
  //     }
  //   );
  //   return this.user;
  // }


  //-------------------------------------------------------------

  getUser() {
    console.log('baseurl: ' + `${this.baseUrl}/hotel`);

    // Make the HTTP request with 'responseType: 'json'' and handle it asynchronously
    return this.http.get(`${this.baseUrl}/hotel`);
  }


}
