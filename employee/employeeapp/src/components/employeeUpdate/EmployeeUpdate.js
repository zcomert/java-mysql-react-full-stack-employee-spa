import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AppContext from "../../context/AppContext";
import { Button, Container, TextField, Typography } from "@mui/material";
import SimpleFab from "../ui/fab/SimpleFab";
import { Stack } from "@mui/system";

export default function EmployeeUpdate() {
  const navigate = useNavigate();

  const { id } = useParams();
  console.log(id);

  const { selectedEmployee, setSelectedEmployee, putOneEmployee } =
    useContext(AppContext);

  const handleChange = (e) => {
    setSelectedEmployee({
      ...selectedEmployee,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    putOneEmployee(selectedEmployee.id, selectedEmployee);
    navigate("/employees");
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
        Update Employee
      </Typography>

      <form onSubmit={handleSubmit}>
        <Stack spacing={3} >
          <TextField
            label="First Name"
            id="firstName"
            name="firstName"
            onChange={handleChange}
            value={selectedEmployee?.firstName}
            type="text"
            placeholder="First Name"
          />
          
          <TextField
            label="Last Name"
            id="lastName"
            name="lastName"
            onChange={handleChange}
            value={selectedEmployee?.lastName}
            type="text"
            placeholder="Last Name"
          />

          <TextField
            label="Salary"
            id="salary"
            name="salary"
            onChange={handleChange}
            value={selectedEmployee?.salary}
            type="text"
            placeholder="Salary"
          />

          <Button variant="contained" type="submit">Update</Button>
        </Stack>
      </form>
      <SimpleFab
        fab={{
          url: "/employees",
          icon: "list",
        }}
      />
    </Container>
  );
}
