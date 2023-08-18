import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  msg = '';
  user=new User();

 

  constructor(private router: Router, private loginservice: LoginService) {

  }
  ngOnInit(): void {

  }

  loginUser() {
   
    
    if (this.user.firstname !== '' && this.user.password !== '') {
      this.loginservice.generateToken(this.user).subscribe(
        (response: any) => {
          
          console.log(response.token)
          this.loginservice.loginuser(response.token)
          window.location.href = "/dashboard";
        },
        (error: any) => {
          alert("error");
        }
      );
    } else {
      alert("fields empty");
    }
  }
}


