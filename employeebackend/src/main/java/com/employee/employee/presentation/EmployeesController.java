package com.employee.employee.presentation;

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
import com.employee.employee.services.EmployeeService;

@RestController
@RequestMapping("api/employees")
@CrossOrigin
public class EmployeesController {
    private final EmployeeService employeeService;

    public EmployeesController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }

    @GetMapping
    public Iterable<Employee> getAllEmployees() {
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

    @PutMapping(path = "{id}")
    public Employee updateOneEmployee(@PathVariable(name = "id") int id,
            @RequestBody Employee employee) {
        var emp = employeeService.updateOneEmployee(id, employee);
        return emp;
    }

    @DeleteMapping(path = "{id}")
    public void deleteOneEmployee(@PathVariable(name = "id") int id) {
        employeeService.deleteOneEmployeeById(id);
    }
}
