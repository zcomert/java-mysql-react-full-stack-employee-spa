package com.employee.employee.repositories;

import org.springframework.data.repository.CrudRepository;

import com.employee.employee.entities.Employee;

public interface EmployeeRepository extends CrudRepository<Employee, Integer> {
    
}
