package com.UserDetails.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.UserDetails.model.UserDetails;
import com.UserDetails.service.UserDetailsServices;

@RestController
public class UserDetailsController {

	@Autowired
	private UserDetailsServices userDetailsServices;
	
	//save data
	@PostMapping("/save")
	public ResponseEntity<UserDetails> saveUserData(@RequestBody UserDetails userDetails)
	{
		return
				ResponseEntity.ok().body(userDetailsServices.saveData(userDetails));
	}
	
	
	//get all
	@GetMapping("/getall")
	public ResponseEntity<List<UserDetails>> getAllUsers()
	{
		return
				ResponseEntity.ok().body(userDetailsServices.getAll());
	}
	
	
	//get by user id
	@GetMapping("/getbyid/{userId}")
	public ResponseEntity<UserDetails> getByUserId(@PathVariable String userId)
	{
		return ResponseEntity.ok().body(userDetailsServices.getByUserId(userId));
	}
	
	//update by name
	//not working
//	@PutMapping("/update/{firstName}")
//	public String updateByUserfirstName(@PathVariable String firstName,@RequestBody UserDetails userDetails)
//	{
//		ResponseEntity.ok().body(userDetailsServices.updateByUserName(firstName));
//		return "Updated successfully";
//	}
	
	//delete by id
	@DeleteMapping("/delete/{userId}")
	public String deleteByUserId(@PathVariable String userId)
	{
		userDetailsServices.deleteByUserId(userId);
		return "User deleted successfully";
	}
	
	
}
