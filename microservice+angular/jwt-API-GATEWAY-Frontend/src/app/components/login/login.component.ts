import { Component, OnInit } from '@angular/core';

import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  credentials = {
    username: '',
    password: ''

  }

  constructor(private loginservice: LoginService) {


  }

  ngOnInit(): void {

  }


//woring funcition
  // onSubmit() {
  //   console.log("form submitted");
    
  //   if (this.credentials.username !='' && this.credentials.password !='') {
  //     alert("You have logged in successfully");
  //     this.loginservice.generateToken(this.credentials)
  //       .subscribe(
  //       (response:any)=> {
  //           console.log("token",response.token);
  //           this.loginservice.loginuser(response.token);
  //           window.location.href = "/dashboard";
            
           
  //         },
  //         (error: any) => {
  //           alert("error");
  //         }
  //       );
  //   } else {
  //     alert("fields empty");
  //   }
  // }


  onSubmit() {
    console.log("form submitted");
    
    if (this.credentials.username !== '' && this.credentials.password !== '') {
      this.loginservice.generateToken(this.credentials).subscribe(
        (response: any) => {
          console.log("token", response.token);
          this.loginservice.loginuser(response.token);
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


  // onSubmit() {
  //   console.log("form submitted");
  
  //   if (this.credentials.username && this.credentials.password) {
  //     this.loginservice.generateToken(this.credentials).subscribe(
  //       (token: string) => {
  //         alert(token);
  //         this.loginservice.loginuser(token);
  //         window.location.href = "/dashboard";
  //       },
  //       error => {
  //         console.log("Token generation error:", error);
  //       }
  //     );
  //   } else {
  //     alert("fields empty");
  //   }
  // }
  

  

  
  






