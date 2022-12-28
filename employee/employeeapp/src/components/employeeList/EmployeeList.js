import React, { useContext } from "react";
import AppContext from "../../context/AppContext";
import Employee from "../employee/Employee";
import SimpleFab from "../ui/fab/SimpleFab";
import { Container, List, Typography } from "@mui/material";

function EmployeeList() {
  const { employees, setList, setSelectedEmployee, deleteOneEmployee } =
    useContext(AppContext);

  const handleClearAll = () => {
    setList([]);
  };

  const handleRemove = (id) => {
    deleteOneEmployee(id);
  };

  return (
    <Container>
      <Typography
        align="center"
        variant="h3"
        component="h3"
        gutterBottom
        color="primary"
      >
        Employees
      </Typography>
      <List>
        {employees.map((emp, index) => (
          <Employee
            setSelectedEmployee={setSelectedEmployee}
            key={index}
            employee={emp}
            handleRemove={handleRemove}
          />
        ))}
      </List>

      <SimpleFab
        fab={{
          url: "/employees/add",
          icon: "add",
        }}
      />

      <Typography align="center" variant="body1" gutterBottom>
        Totally {employees.length} employees have been listed.
      </Typography>
    </Container>
  );
}

export default EmployeeList;
