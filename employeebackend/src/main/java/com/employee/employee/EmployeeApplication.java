package com.employee.employee;

import java.util.ArrayList;
import java.util.List;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class EmployeeApplication {

	public static void main(String[] args) {
		SpringApplication.run(EmployeeApplication.class, args);
	}

	// .
	@GetMapping
	public String hello() {
		return "Hello Spring Boot.";
	}

	// ./names
	@GetMapping(path = "/names")
	public List<String> getAllNames() {
		var names = new ArrayList<String>();
		names.add("Oya");
		names.add("Ali");
		names.add("Efe");
		names.add("Can");
		names.add("Alp");
		return names;
	}

	// ./employee
	@GetMapping(path = "/employee")
	public Employee getOneEmployee() {
		return new Employee(1, "Ahmet", "Can");

	}

	// ./employees
	@GetMapping(path = "/employees")
	public List<Employee> getAllEmployees() {
		var employees = new ArrayList<Employee>();
		employees.add(new Employee(1, "Ahmet", "Dağ"));
		employees.add(new Employee(2, "Can", "Tepe"));
		employees.add(new Employee(3, "Filiz", "Güneş"));
		return employees;
	}

}
