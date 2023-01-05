import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AppContext from "../../context/AppContext";
import { Button, Container, TextField, Typography } from "@mui/material";
import SimpleFab from "../ui/fab/SimpleFab";
import { Stack } from "@mui/system";
import { useFormik } from "formik";
import { updateValidationSchema } from "./updateValidationSchema";

export default function EmployeeUpdate() {
  const { selectedEmployee, setSelectedEmployee, putOneEmployee } =
    useContext(AppContext);

  const { handleSubmit, handleChange, handleBlur, touched, values, errors } =
    useFormik({
      initialValues: {
        firstName: selectedEmployee?.firstName,
        lastName: selectedEmployee?.lastName,
        salary: selectedEmployee?.salary,
      },
      onSubmit: (values) => {
        putOneEmployee(selectedEmployee.id, {
          id: selectedEmployee.id,
          ...values,
        });
        navigate("/employees");
      },
      validationSchema: updateValidationSchema,
    });

  const navigate = useNavigate();
  const { id } = useParams();

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
        <Stack spacing={3}>
          <TextField
            label="First Name"
            id="firstName"
            name="firstName"
            onChange={handleChange}
            onBlur = {handleBlur}
            value={values?.firstName}
            type="text"
            placeholder="First Name"
            helperText = {errors?.firstName && touched?.firstName ? errors?.firstName : " "}
            error = {errors?.firstName && touched?.firstName }
          />

          <TextField
            label="Last Name"
            id="lastName"
            name="lastName"
            onChange={handleChange}
            onBlur = {handleBlur}
            value={values?.lastName}
            type="text"
            placeholder="Last Name"
            helperText = {errors?.lastName && touched?.lastName ? errors?.lastName : " "}
            error = {errors?.lastName && touched?.lastName }
          />

          <TextField
            label="Salary"
            id="salary"
            name="salary"
            onChange={handleChange}
            onBlur = {handleBlur}
            value={values?.salary}
            type="text"
            placeholder="Salary"
            helperText = {errors?.salary && touched?.salary ? errors?.salary : " "}
            error = {errors?.salary && touched?.salary }
          />

          <Button variant="contained" type="submit">
            Update
          </Button>
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
