package com.PersonalDetails.ServiceImpl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.PersonalDetails.model.PersonalDetails;
import com.PersonalDetails.repo.PersonalDetailsRepo;
import com.PersonalDetails.service.PersonalDetailsServices;

@Service
public class PersonalDetailsServiceImpl implements PersonalDetailsServices {
	@Autowired
	private PersonalDetailsRepo personalDetailsRepo;

	@Override
	public PersonalDetails saveData(PersonalDetails personalDetails) {
		// TODO Auto-generated method stub
		return personalDetailsRepo.save(personalDetails);
	}

	@Override
	public List<PersonalDetails> getAllPersonalDetails() {
		// TODO Auto-generated method stub
		return personalDetailsRepo.findAll();
	}

	@Override
	public PersonalDetails getByPersonalId(String personalId) {
		// TODO Auto-generated method stub
		return personalDetailsRepo.findBypersonalId(personalId);
	}

	@Override
	public List<PersonalDetails> getByUserId(String userId) {
		// TODO Auto-generated method stub
		return personalDetailsRepo.findByuserId(userId);
	}

	@Override
	public String deletebyid(String personalId) {
		// TODO Auto-generated method stub
		 personalDetailsRepo.deleteById(personalId);
		 return "Deleted successfully";
	}

//	@Override
//	public String updateByUserId(String userId) {
//		// TODO Auto-generated method stub
//	 personalDetailsRepo.findById(userId);
//	 return "Updated";
//	}
	
	

}
