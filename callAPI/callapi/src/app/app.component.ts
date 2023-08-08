import { Component } from '@angular/core';

//lets import userData Service here to see output on page
import { UserDataService } from './services/user-data.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'callapi';
  users: any;

  constructor(private userData: UserDataService) {
    userData.users().subscribe((data) => {
      console.warn("data", data);
      this.users = data;
    });

  }

  getUser(data: any) {
    console.log(data);
    this.userData.saveUser( data).subscribe((result)=>{
      console.log(result);
    })
  }








}
