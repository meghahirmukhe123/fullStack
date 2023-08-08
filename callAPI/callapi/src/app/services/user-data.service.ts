import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private http:HttpClient) {
    // we can call api inside this constructor but we will create function whose name will be "user" and we will call API in that function
   }
   

   url="http://localhost:8080/http";
   users()
   {
    return this.http.get(this.url);

   }

   saveUser(data:any)
   {
    return this.http.post(this.url,data);
   }
}
