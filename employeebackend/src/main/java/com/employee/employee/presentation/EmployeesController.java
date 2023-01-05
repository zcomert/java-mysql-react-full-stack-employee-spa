package com.employee.employee.presentation;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.WebRequest;

import com.employee.employee.entities.Employee;
import com.employee.employee.entities.errorModel.ErrorDetails;
import com.employee.employee.entities.exceptions.NotFoundException;
import com.employee.employee.services.Contracts.EmployeeService;

@RestController
@RequestMapping("api/employees")
@CrossOrigin
public class EmployeesController {

    private final EmployeeService employeeService;

    public EmployeesController(@Qualifier("mysql") EmployeeService employeeService) {
        this.employeeService = employeeService;
    }

    @GetMapping
    public ResponseEntity<?> getAllEmployees() {
        var employees = employeeService.getAllEmployees();
        return new ResponseEntity<>(employees, HttpStatus.OK); // OK : 200
    }

    // employees/2
    @GetMapping(path = "{id}")
    public ResponseEntity<Employee> getOneEmployee(@PathVariable(name = "id") int id) {
        var employee = employeeService.getOneEmployeeById(id);
        return ResponseEntity.ok(employee); // 200
    }

    @PostMapping
    public ResponseEntity<?> createOneEmployee(@Valid @RequestBody Employee employee) {
        employeeService.createOneEmployee(employee);
        return new ResponseEntity<>(employee, HttpStatus.CREATED); // 201
    }

    @PutMapping(path = "{id}")
    public ResponseEntity<?> updateOneEmployee(@PathVariable(name = "id", required = true) int id,
            @Valid @RequestBody Employee employee) {
        employeeService.updateOneEmployee(id, employee); // client -> server
        return ResponseEntity.ok()
                .header("location", "http://localhost:8082/api/employees/" + employee.getId())
                .body(employee);
    }

    @DeleteMapping(path = "{id}")
    @ResponseBody
    @ResponseStatus(code = HttpStatus.NO_CONTENT)
    public ResponseEntity<Void> deleteOneEmployee(@PathVariable(name = "id", required = true) int id) {
        employeeService.deleteOneEmployee(id);
        return ResponseEntity.noContent().build();
    }

    // @ExceptionHandler(NotFoundException.class)
    // @ResponseBody
    // public ResponseEntity<Object> handleException(NotFoundException ex,
    // WebRequest request) {

    // var errodetails = ErrorDetails
    // .builder()
    // .statusCode(404)
    // .message(ex.getMessage())
    // .path(request.getDescription(false))
    // .build();

    // return new ResponseEntity<>(errodetails, HttpStatus.NOT_FOUND); // 404
    // }

}
