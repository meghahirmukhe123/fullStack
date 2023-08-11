package com.JwtIn1.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "JWT-1")
public class hotel {
	
	@Id
	private String hotelId;
	private String hotelName;
	private int rating;
	public String getHotelId() {
		return hotelId;
	}
	public void setHotelId(String hotelId) {
		this.hotelId = hotelId;
	}
	public String getHotelName() {
		return hotelName;
	}
	public void setHotelName(String hotelName) {
		this.hotelName = hotelName;
	}
	public int getRating() {
		return rating;
	}
	public void setRating(int rating) {
		this.rating = rating;
	}
	@Override
	public String toString() {
		return "hotel [hotelId=" + hotelId + ", hotelName=" + hotelName + ", rating=" + rating + "]";
	}
	public hotel(String hotelId, String hotelName, int rating) {
		super();
		this.hotelId = hotelId;
		this.hotelName = hotelName;
		this.rating = rating;
	}
	public hotel() {
		super();
		// TODO Auto-generated constructor stub
	}
	

}
