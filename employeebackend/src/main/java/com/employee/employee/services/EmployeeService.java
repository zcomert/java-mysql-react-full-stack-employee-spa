package com.employee.employee.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.employee.employee.entities.Employee;
import com.employee.employee.repositories.EmployeeRepository;

@Service
public class EmployeeService {

    @Autowired
    private final EmployeeRepository employeeRepository;

    public EmployeeService(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    public Iterable<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    public Employee getOneEmployeeById(int id) {
        return employeeRepository.findById(id).orElse(null);
    }

    public Employee createOneEmployee(Employee employee) {
        return employeeRepository.save(employee);
    }

    public Employee updateOneEmployee(int id, Employee employee) {
        var emp = getOneEmployeeById(id);
        if (emp != null) {
            emp.setFirstName(employee.getFirstName());
            emp.setLastName(employee.getLastName());
            emp.setSalary(employee.getSalary());
            return employeeRepository.save(emp);
        }
        return null;
    }

    public void deleteOneEmployeeById(int id) {
        var emp = getOneEmployeeById(id);
        if (emp != null) {
            employeeRepository.deleteById(id);
        }
        return;
    }
}
