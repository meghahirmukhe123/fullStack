package com.Backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Backend.exceptionHandling.ResourceNotFoundException;
import com.Backend.model.Employee;
import com.Backend.repository.EmployeeRepository;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:4200")

public class EmployeeController {
	
	@Autowired
	private EmployeeRepository employeeRepository;
	
	
	//get all
	@GetMapping("/employees")
	public List<Employee> getAll()
	{
		return employeeRepository.findAll();
	}
	
	//save employee data
	@PostMapping("/employees")
	public Employee createEmployee(@RequestBody Employee employee)
	{
		return employeeRepository.save(employee);
	}
	
	//get by id
	@GetMapping("/employees/{id}")
	public Employee getById(@PathVariable long id)
	{
		return employeeRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not found with id: "+id));
	}
	
	//update
	@PutMapping("/employees/{id}")
	public Employee updateEmp(@PathVariable long id,@RequestBody Employee emp)
	{
		Employee employee= employeeRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Employee not found with id: "+id));
		employee.setFirstName(emp.getFirstName());
		employee.setLastName(emp.getLastName());
		employee.setEmailId(emp.getEmailId());
		
		Employee updatedEmployee= employeeRepository.save(employee);
		return updatedEmployee;
	}
	
	//delete by id
	@DeleteMapping("/employees/{id}")
	public String deleteById(@PathVariable long id)
	{
		employeeRepository.deleteById(id);
		return "Employee deleted successfully";
		
	}
	
	
	
	
	
	
	

}
