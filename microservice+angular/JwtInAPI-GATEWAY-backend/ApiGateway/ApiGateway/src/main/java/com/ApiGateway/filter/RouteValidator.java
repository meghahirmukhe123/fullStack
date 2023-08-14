package com.ApiGateway.filter;
import java.util.*;

import java.util.function.Predicate;

import org.springframework.http.server.reactive.ServerHttpRequest;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.CrossOrigin;

@Component
@CrossOrigin("*")
public class RouteValidator {
	
	//if request coming from following url ignore it
	public static final List<String> openEndPoints =
			List.of(
					"/auth/register",
					
					"/eureka",
					"/stu",
					"/auth/token"
					
					
					);
	
	public Predicate<ServerHttpRequest> isSecured=
			
			request -> openEndPoints.stream()
			.noneMatch(uri -> request.getURI().getPath().contains(uri));

}
