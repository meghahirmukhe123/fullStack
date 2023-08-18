package com.ProductDetails.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ProductDetails.model.ProductDetails;
import com.ProductDetails.service.ProductServices;

@RestController
public class ProductDetailsController {
	
	@Autowired
	private ProductServices productServices;
	
	//save data
	@PostMapping("/save")
	public ResponseEntity<ProductDetails> saveData(@RequestBody ProductDetails productDetails)
	{
		return ResponseEntity.ok().body(productServices.saveProductData(productDetails));
	}
	
	//get all
	@GetMapping("/getallproducts")
	public ResponseEntity<List<ProductDetails>> getall()
	{
		return ResponseEntity.ok().body(productServices.getAllProduct());
	}
	
	//get by product id
	@GetMapping("/getbyproductid/{productId}")
	public ResponseEntity<Optional<ProductDetails>> getByproductId(@PathVariable String productId)
	{
		return ResponseEntity.ok().body(productServices.getByProductId(productId));
		
	}

	//get by user id
	@GetMapping("/getproductbyuserid/{userId}")
	public ResponseEntity<ProductDetails> getByUserId(@PathVariable String userId)
	{
		return ResponseEntity.ok().body(productServices.getByUserId(userId));
	}
	
	//delete by product id
	@DeleteMapping("/delete/{productId}")
	public String deleteByproductId(@PathVariable String productId)
	{
		productServices.deleteByProductId(productId);
		return "deleted";
	}
}
