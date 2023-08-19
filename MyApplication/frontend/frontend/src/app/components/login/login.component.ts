import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  msg='';
  user=new User();

  credentials =
  {
    name: this.user.name,
    password: this.user.password

  }

  constructor(private loginservice:LoginService){}
  ngOnInit(): void {
    
  }

  loginUser()
  {

    console.log("this is loginuser funtion");
    if(this.credentials.name !=='' && this.credentials.password !=='')
    {
      this.loginservice.generateToken(this.credentials)
      .subscribe
      (
        (response :any)=>
        {
          console.log("token",response.token);
          window.location.href="/dashboard";
        },
        
          (error:any) =>
          {
            alert("error in login user funtion");

          }

        
      )
    }
    else{
      alert("feilds empty");
    }
  }

}
