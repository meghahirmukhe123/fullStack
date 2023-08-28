import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { UserdetailsService } from 'src/app/services/userdetails.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  //when user is logged in they should see logout at top of the page
  public loggedIn = false;

  userdetails:any;



  constructor(private loginService: LoginService,private router:Router) { }
  ngOnInit(): void {
    this.loggedIn = this.loginService.isLoggedIn();
    if (!this.loggedIn) {
      this.router.navigate(['/login']); // Redirect to login if not logged in
    }
  }

  logoutUser()
  {
    this.loginService.logout();
    // location.reload();
    this.router.navigate(['/login']); // Redirect to login after logout
   
  }

  
 
  

}
