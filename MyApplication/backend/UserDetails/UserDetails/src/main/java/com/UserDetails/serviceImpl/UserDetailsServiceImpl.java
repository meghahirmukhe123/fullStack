package com.UserDetails.serviceImpl;

import java.util.List;

import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.UserDetails.external.services.PersonalDetailsService;
import com.UserDetails.external.services.ProductDetailsService;
import com.UserDetails.model.PersonalDetails;
import com.UserDetails.model.ProductDetails;
import com.UserDetails.model.UserDetails;
import com.UserDetails.repo.UserDetailsRepo;
import com.UserDetails.service.UserDetailsServices;

@Service
public class UserDetailsServiceImpl implements UserDetailsServices {
	@Autowired
	private UserDetailsRepo userDetailsRepo;

	@Autowired
	private PersonalDetailsService personalDetailsService;
	
	@Autowired
	private ProductDetailsService productDetailsService;

	@Autowired
	private RestTemplate restTemplate;

	@Override
	public UserDetails saveData(UserDetails userDetails) {
		// TODO Auto-generated method stub
		return userDetailsRepo.save(userDetails);
	}

	@Override
	public List<UserDetails> getAll() {
		List<UserDetails> getAlluserdetails = userDetailsRepo.findAll();
//		for (UserDetails u : getAlluserdetails) {
//			List<PersonalDetails> personal = personalDetailsService.getPersonalDetails(u.getUserId());
//			List<PersonalDetails> personalWithProduct = personal.stream().map(data -> {
//				ResponseEntity<ProductDetails> productEntity = restTemplate.getForObject("http://localhost:1003/getbyuserid/" + data.getUserId(), ProductDetails.class);
//
//				if (productEntity != null) {
//					ProductDetails p = productEntity.getBody();
//					data.setProductDetails(p);
//				}
//				return data;
//			}).collect(Collectors.toList());
//			u.setPersonalDetails(personalWithProduct);
//
//		}
		return getAlluserdetails;
	}
	


	@Override
	public UserDetails getByUserId(String userId) {
		UserDetails details= userDetailsRepo.findById(userId).orElseThrow(null);
		
		List<PersonalDetails> personal= personalDetailsService.getPersonalDetails(details.getUserId());
		
		List<PersonalDetails> personalDetailsList=
				personal.stream().map(data ->{
					ProductDetails product= productDetailsService.getProductDetails(data.getUserId());
					data.setProductDetails(product);
					return data;
			
		}).collect(Collectors.toList());
		details.setPersonalDetails(personalDetailsList);
		return details;
	}

	@Override
	public List<UserDetails> updateByUserName(String firstname) {
		// TODO Auto-generated method stub
		return userDetailsRepo.findByfirstName(firstname);
	}

	@Override
	public String deleteByUserId(String userId) {
		// TODO Auto-generated method stub
		userDetailsRepo.deleteById(userId);
		;
		return "deleted";
	}

}
