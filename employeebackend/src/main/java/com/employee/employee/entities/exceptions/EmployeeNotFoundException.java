package com.employee.employee.entities.exceptions;

public class EmployeeNotFoundException extends NotFoundException {

    public EmployeeNotFoundException(int id) {
        super(String.format("Employee with id : %d could not found.", id));
    }
    
}
