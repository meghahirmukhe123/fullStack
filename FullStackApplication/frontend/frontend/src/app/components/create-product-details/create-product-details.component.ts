import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductDetails } from 'src/app/product-details';

import { ProductdetailsService } from 'src/app/services/productdetails.service';

@Component({
  selector: 'app-create-product-details',
  templateUrl: './create-product-details.component.html',
  styleUrls: ['./create-product-details.component.css']
})
export class CreateProductDetailsComponent implements OnInit {

  product: ProductDetails = new ProductDetails();


  constructor(private productsService: ProductdetailsService,
    private router:Router
    )
  {

  }
  ngOnInit(): void {
    
  }

  //to save userdetails in database
  saveProductDetails() {
    this.productsService.saveProductDetails(this.product)
      .subscribe(
        () => {
          console.log('Data saved successfully');
          this.goToProductDetaillist();
        },
        (error) => {
          console.error(error);
          // Handle the error here if needed
        }
      );
  }
  
  goToProductDetaillist()
  {

    this.router.navigate(['/productlist']);
   

  }

  onSubmit()
  {
    console.log(this.product);
    this.saveProductDetails();
  }

}
