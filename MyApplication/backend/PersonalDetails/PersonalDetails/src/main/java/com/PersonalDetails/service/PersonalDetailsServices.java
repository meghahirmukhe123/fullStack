package com.PersonalDetails.service;

import java.util.List;
import java.util.Optional;

import com.PersonalDetails.model.PersonalDetails;

public interface PersonalDetailsServices {
	
	//save data
	PersonalDetails saveData(PersonalDetails personalDetails);
	
	//get all
	List<PersonalDetails> getAllPersonalDetails();
	
	//get by personal id
	PersonalDetails getByPersonalId(String personalId);
	
	//get by user id
	List<PersonalDetails> getByUserId(String userId);
	
	//delete by personal id
	String deletebyid(String personalId);
	


}
