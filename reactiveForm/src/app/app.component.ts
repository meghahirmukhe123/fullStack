import { Component } from '@angular/core';

// learning reactive form. import following
import{FormControl,FormGroup,Validator, Validators} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactiveForm';


  // FormGroup controls form
  loginform= new FormGroup(
    {
      // below lines controls feilds of form
      // "Validators.email" this is used bcoz we want in particular box only email have to enter not anything else
      user:new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',[Validators.required,Validators.minLength(5)]),
    }
  );

  

  loginuser()
  {
    console.warn(this.loginform.value);
  }

  //above we have created validation.If we want to print some error then we have to make one getter for user

  get user()
  {
    return this.loginform.get('user');
  }

  //getter for password feild
  get password()
  {
    return this.loginform.get('password');
  }


  
}
