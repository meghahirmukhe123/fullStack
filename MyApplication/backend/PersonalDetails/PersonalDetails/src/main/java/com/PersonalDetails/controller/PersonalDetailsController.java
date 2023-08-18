package com.PersonalDetails.controller;

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

import com.PersonalDetails.model.PersonalDetails;
import com.PersonalDetails.service.PersonalDetailsServices;

@RestController
public class PersonalDetailsController {
	
	@Autowired
	private PersonalDetailsServices personalDetailsServices;
	
	//save data
	@PostMapping("/save")
	public ResponseEntity<PersonalDetails> saveData(@RequestBody PersonalDetails personalDetails)
	{
		return ResponseEntity.ok().body(personalDetailsServices.saveData(personalDetails));
	}
	
	//get all
	@GetMapping("/getallpersonaldetails")
	public ResponseEntity<List<PersonalDetails>> getalldata()
	{
		return ResponseEntity.ok().body(personalDetailsServices.getAllPersonalDetails());
	}
	
	//get by personal id
	@GetMapping("/getbypersonalid/{personalId}")
	public ResponseEntity<PersonalDetails> getbypersonalid(@PathVariable String personalId)
	{
		return ResponseEntity.ok().body(personalDetailsServices.getByPersonalId(personalId));
	}
	
	//get by user id
	@GetMapping("/getpersonaldetailsbyuserid/{userId}")
	public ResponseEntity<List<PersonalDetails>> getByUserId(@PathVariable String userId)
	{
		return ResponseEntity.ok().body(personalDetailsServices.getByUserId(userId));
	}
	
	//delete by personal id
	@DeleteMapping("/delete/{personalId}")
	public String deleteById(@PathVariable String personalId)
	{
		personalDetailsServices.deletebyid(personalId);
		return "Deleted successfully";
	}
	
//	//update by user id
//	@PutMapping("/update/{userId}")
//	public String updateByuserid(@PathVariable String userId,@RequestBody PersonalDetails personalDetails)
//	{
//		personalDetailsServices.updateByUserId(userId);
//		return "Updated successfully";
//	}

}
