package com.JwtIn1.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class home {
	
	Logger logger= LoggerFactory.getLogger("home");
	@GetMapping("/home")
	public String getdata()
	{
		logger.info("getDataCalled");
//		return "Shri Swami Samarth";
		
        return "{\"message\": \"Shri Swami Samarth\"}";
	}

}
