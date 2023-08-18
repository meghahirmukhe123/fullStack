package com.ProductDetails.service;

import java.util.List;
import java.util.Optional;

import com.ProductDetails.model.ProductDetails;

import lombok.ToString;

public interface ProductServices {
	
	
	//save data
	ProductDetails saveProductData(ProductDetails productDetails);
	
	//get all
	List<ProductDetails> getAllProduct();
	
	//get by product id
	Optional<ProductDetails> getByProductId(String productId);
	
	//get by user id
	ProductDetails getByUserId(String userId);
	
	//delete by product id
	String deleteByProductId(String productId);

}
