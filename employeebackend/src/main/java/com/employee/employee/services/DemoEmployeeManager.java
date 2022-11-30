package com.employee.employee.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import com.employee.employee.entities.Employee;
import com.employee.employee.services.Contracts.EmployeeService;

@Service
@Repository("demo")
public class DemoEmployeeManager implements EmployeeService {

    @Override
    public List<Employee> getAllEmployees() {
        var list = new ArrayList<Employee>();
        list.add(new Employee(1, "Ahmet", "Can", 1000));
        list.add(new Employee(2, "Fatma", "Dağ", 1500));
        list.add(new Employee(3, "Can", "Tepe", 2500));

        return list;
    }

    @Override
    public Employee getOneEmployeeById(int id) {
        return new Employee(3, "Can", "Tepe", 2500);
    }

    @Override
    public Employee createOneEmployee(Employee employee) {
        return new Employee(1, "Ahmet", "Can", 1000);
    }

}
