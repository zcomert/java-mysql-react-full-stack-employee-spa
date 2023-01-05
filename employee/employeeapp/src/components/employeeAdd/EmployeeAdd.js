import { useContext, useState } from "react";
import AppContext from "../../context/AppContext";
import SimpleFab from "../ui/fab/SimpleFab";
import { Button, Container, TextField, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { useFormik } from "formik";
import { addValidationSchema } from "./addValidationSchema";

function EmployeeAdd() {
  const { postOneEmployee } = useContext(AppContext);
  const {
    handleChange,
    handleSubmit,
    values,
    setValues,
    errors,
    handleBlur,
    touched,
  } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      salary: 0,
    },
    onSubmit: (values) => {
      console.log(values);
      postOneEmployee(values);
      handleClear();
    },
    validationSchema : addValidationSchema
  });

  const handleClear = () => {
    setValues({
      firstName: "",
      lastName: "",
      salary: 0,
    });
  };

  return (
    <Container>
      <Typography
        color="primary"
        align="center"
        variant="h3"
        component="h3"
        gutterBottom
      >
        New Employee
      </Typography>
      <form onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <TextField
            label="First Name"
            id="firstName"
            name="firstName"
            placeholder="First Name"
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values?.firstName}
            helperText={errors?.firstName && touched?.firstName ? errors?.firstName : ""}
            error = {errors?.firstName && touched?.firstName}
          />

          <TextField
            label="Last Name"
            id="lastName"
            name="lastName"
            placeholder="Last Name"
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values?.lastName}
            helperText={errors?.lastName && touched?.lastName ? errors?.lastName : ""}
            error = {errors?.lastName && touched?.lastName}
          />

          <TextField
            label="Salary"
            id="salary"
            name="salary"
            placeholder="Salary"
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values?.salary}
            helperText={errors?.salary && touched?.salary ? errors?.salary : ""}
            error = {errors?.salary && touched?.salary}
          />

          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            justifyContent="center"
          >
            <Button variant="contained" type="submit">
              Save
            </Button>
            <Button variant="outlined" onClick={handleClear} type="button">
              Clear
            </Button>
          </Stack>
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

export default EmployeeAdd;
