package com.employee.employee.presentation;

import java.util.List;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.employee.employee.entities.Employee;
import com.employee.employee.services.Contracts.EmployeeService;

@RestController
@RequestMapping("api/employees")
@CrossOrigin
public class EmployeesController {

    private final EmployeeService employeeService;

    public EmployeesController(@Qualifier("mysql") 
    EmployeeService employeeService) {
        this.employeeService = employeeService;
    }

    @GetMapping
    public List<Employee> getAllEmployees() {
        return employeeService.getAllEmployees();
    }

    // employees/2
    @GetMapping(path = "{id}")
    public Employee getOneEmployee(@PathVariable(name = "id") int id) {
        return employeeService.getOneEmployeeById(id);
    }

    @PostMapping
    public Employee createOnEmployee(@RequestBody Employee employee) {
        return employeeService.createOneEmployee(employee);
    }
}
