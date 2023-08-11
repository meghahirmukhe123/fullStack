package com.JwtIn1.repo;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.JwtIn1.model.hotel;

public interface hotelrepo extends MongoRepository<hotel, String>{

}
