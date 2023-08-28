import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductDetails } from '../product-details';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductdetailsService {

  constructor(private http:HttpClient) { }



   //save user details
   public saveProductDetails(product: ProductDetails): Observable<any> {
    return this.http.post("http://localhost:1003/saveProductDetails", product);
  }

  //get all
  getProductDetails(): Observable<ProductDetails[]> {
    return this.http.get<ProductDetails[]>("http://localhost:1003/getallproducts");
  }

  //get by email id
  getbyidurl = "http://localhost:1003/getproductbyemailid"
  getProductDetailsByEmailId(emailId: string): Observable<ProductDetails> {
    return this.http.get<ProductDetails>(`${this.getbyidurl}/${emailId}`);

  }


  /* method to update by email id*/
  updateurl = "http://localhost:1003/updatebyemailid"
  updateProductByEmailId(emailId: string, product: ProductDetails): Observable<Object> {
    return this.http.put(`${this.updateurl}/${emailId}`, product);
  }

  /* method to delete by email id*/
  deleteurl = "http://localhost:1003/deleteProductdetails"
  deleteProductDetailsByEmailID(emailId: string): Observable<Object> {
    return this.http.delete(`${this.deleteurl}/${emailId}`);
  }




}
