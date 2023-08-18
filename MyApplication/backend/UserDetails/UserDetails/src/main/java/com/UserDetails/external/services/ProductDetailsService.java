package com.UserDetails.external.services;



import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.UserDetails.model.ProductDetails;

@FeignClient(name = "PRODUCTDETAILS-SERVICE")
public interface ProductDetailsService {
	
	@GetMapping("/getproductbyuserid/{userId}")
	ProductDetails getProductDetails(@PathVariable String userId);

}
