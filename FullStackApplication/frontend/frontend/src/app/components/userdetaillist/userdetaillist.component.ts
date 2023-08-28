import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserdetailsService } from 'src/app/services/userdetails.service';
import { UserDetails } from 'src/app/user-details';

@Component({
  selector: 'app-userdetaillist',
  templateUrl: './userdetaillist.component.html',
  styleUrls: ['./userdetaillist.component.css']
})
export class UserdetaillistComponent implements OnInit {

  userdetails: UserDetails[]=[];
  searchEmail: string = '';
 
  displayedUser: UserDetails | null = null;


  constructor(private userdetailsService: UserdetailsService,
    private router: Router)
  {

  }
  ngOnInit(): void {

    this.getUserDetails();

  }

  //to get all userdetails
  getUserDetails()
  {
    this.userdetailsService.getUserDetailsList()
    .subscribe(
      data=>
      {
        this.userdetails = data;
        console.log(data);
      }
    );
  }

  //update by email id
  updatebyEmailId(emailId:string)
  {
    this.router.navigate(['updateuserdetails',emailId]);
  }

  //delete by email id
  deletebyEmailId(emailId:string)
  {
    this.userdetailsService.deleteByEmailId(emailId).subscribe(
      data=>
      {
        console.log(data);
        this.getUserDetails();
        alert("deleted successfully");
      }
    )
  }


  searchUser() {
    const foundUser = this.userdetails.find(user => user.emailId === this.searchEmail);
    if (foundUser) {
      this.displayedUser = foundUser;
    } else {
      this.displayedUser = null;
      alert('Email ID not found.');
    }
  }

  clearSearch() {
    this.searchEmail = '';
    this.displayedUser = null;
  }




   

}
