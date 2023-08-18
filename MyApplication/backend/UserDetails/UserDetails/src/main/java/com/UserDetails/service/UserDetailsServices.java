package com.UserDetails.service;

import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.PathVariable;

import com.UserDetails.model.UserDetails;


public interface UserDetailsServices {

	//to save data
	UserDetails saveData(UserDetails userDetails);
	
	//get all
	List<UserDetails> getAll();
	
	//get by userId
	UserDetails getByUserId(String userId);
	
	//update
	List<UserDetails> updateByUserName(String firstname);
	
	//delete by id
	
	String deleteByUserId(@PathVariable String userId);
	
}
