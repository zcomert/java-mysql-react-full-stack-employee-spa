package com.employee.employee.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "employees")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Employee {
    @Id
    @GeneratedValue
    @Column(name = "employee_id")
    private int id;

    @Column(name = "first_name")
    @NotBlank(message = "Firstname is mandatory.")
    @NotNull
    private String firstName;

    @Column(name = "last_name")
    @NotBlank(message = "Lastname is mandatory.")
    @NotNull
    private String lastName;

    @Column(name = "salary")
    @Min(value = 1, message = "Salary must be greater than 1.")
    @Max(value = 1000, message = "Salary must be lower than 1000.")
    private double salary;
}
