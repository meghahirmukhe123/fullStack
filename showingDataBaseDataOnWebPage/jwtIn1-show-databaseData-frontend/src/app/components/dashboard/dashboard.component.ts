// import { Component, OnInit } from '@angular/core';
// import { UserService } from 'src/app/services/user.service';


// @Component({
//   selector: 'app-dashboard',
//   templateUrl: './dashboard.component.html',
//   styleUrls: ['./dashboard.component.css']
// })
// export class DashboardComponent implements OnInit {
//   user: any;



  
//   constructor(private userservice:UserService){}
  
//   ngOnInit(): void {
   
//   }

//   // getUser()
//   // {

//   //   this.userservice.getUser().subscribe(
//   //     (user: any) =>{
//   //       console.log("user");
//   //     },
//   //     (error: any)=>{
//   //       console.error("Error:", error);
//   //     }
//   //   )
//   // }
//   getUser() {
//      this.userservice.getUser().subscribe(
//        (user: any) => {
//         console.log(user); // Log the user data
//         this.user=user;
//       },
//       (error: any) => {
//         console.error("Error:", error);
//       }
//     );
//   }  

 

// }


import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user: any;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getUser();
  }

  // getUser() {
  //   this.userService.getUser().subscribe(
  //     (user: any) => {
  //       console.log("User:", user); // Log the user data
  //       this.user = user;
  //     },
  //     (error: any) => {
  //       console.error("Error:", error);
  //       // Handle the error condition, e.g., display an error message
  //     }
  //   );
  // }

  getUser()
  {
    this.userService.getUser().subscribe(
      (userData:any)=>{
        console.log("Output:", userData);
        //this.user = userData;
        this.user = JSON.stringify(userData, null, 2); // Parse with indentation

      },
      (error:any) => {
        console.error("Error:", error);
      }

    )
  }
  


}
