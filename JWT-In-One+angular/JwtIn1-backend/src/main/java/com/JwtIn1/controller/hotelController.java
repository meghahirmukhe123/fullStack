package com.JwtIn1.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.JwtIn1.model.hotel;
import com.JwtIn1.repo.hotelrepo;

@RestController
public class hotelController {

	@Autowired
	private hotelrepo repo;

	@PostMapping("/hotel")
	public hotel saveData(@RequestBody hotel h) {
		return repo.save(h);
	}

	@GetMapping("/hotel")
	public List<hotel> getAll() {

		return repo.findAll();
	}

}
