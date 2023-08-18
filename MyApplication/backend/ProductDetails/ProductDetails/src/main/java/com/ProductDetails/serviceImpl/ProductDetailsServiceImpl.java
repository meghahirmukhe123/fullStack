package com.ProductDetails.serviceImpl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ProductDetails.model.ProductDetails;
import com.ProductDetails.repo.ProductRepo;
import com.ProductDetails.service.ProductServices;

@Service
public class ProductDetailsServiceImpl implements ProductServices{
	
	@Autowired
	private ProductRepo productRepo;

	@Override
	public ProductDetails saveProductData(ProductDetails productDetails) {
		// TODO Auto-generated method stub
		return productRepo.save(productDetails);
	}

	@Override
	public List<ProductDetails> getAllProduct() {
		// TODO Auto-generated method stub
		return productRepo.findAll();
	}

	@Override
	public Optional<ProductDetails> getByProductId(String productId) {
		// TODO Auto-generated method stub
		return productRepo.findById(productId);
	}

	@Override
	public ProductDetails getByUserId(String userId) {
		// TODO Auto-generated method stub
		return productRepo.findByuserId(userId);
	}

	@Override
	public String deleteByProductId(String productId) {
		// TODO Auto-generated method stub
		productRepo.deleteById(productId);
		return "deleted succeessfully";
	}

}
