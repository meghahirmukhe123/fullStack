import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductDetails } from 'src/app/product-details';

import { ProductdetailsService } from 'src/app/services/productdetails.service';

@Component({
  selector: 'app-productdetail-list',
  templateUrl: './productdetail-list.component.html',
  styleUrls: ['./productdetail-list.component.css']
})
export class ProductdetailListComponent implements OnInit {

  product: ProductDetails[] = [];
  searchEmail: string = '';

  displayedUser: ProductDetails | null = null;


  constructor(private productsService: ProductdetailsService, private router: Router) {

  }
  ngOnInit(): void {

    this.getProductDetails();

  }

  //to get all userdetails
  getProductDetails() {
    this.productsService.getProductDetails()
      .subscribe(
        data => {
          this.product = data;
          console.log(data);
        }
      );
  }

  //update by email id
  updateProductDetailsbyemailid(emailId: string) {
    this.router.navigate(['updateproduct', emailId]);
  }

  //delete by email id
  deletebyEmailId(emailId: string) {
    this.productsService.deleteProductDetailsByEmailID(emailId).subscribe(
      data => {
        console.log(data);
        this.getProductDetails();
        alert("deleted successfully");
      }
    )
  }





  searchUser() {
    const foundUser = this.product.find(user => user.emailId === this.searchEmail);
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
