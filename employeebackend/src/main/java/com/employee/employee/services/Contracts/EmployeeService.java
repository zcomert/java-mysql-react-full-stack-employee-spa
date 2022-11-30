package com.employee.employee.services.Contracts;

import java.util.List;

import com.employee.employee.entities.Employee;

public interface EmployeeService {
    List<Employee> getAllEmployees();

    Employee getOneEmployeeById(int id);

    Employee createOneEmployee(Employee employee);
}
