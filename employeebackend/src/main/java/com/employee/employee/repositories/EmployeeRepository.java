package com.employee.employee.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.employee.employee.entities.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Integer> {
    
}
