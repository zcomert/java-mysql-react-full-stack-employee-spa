import { useContext, useState } from "react";
import AppContext from "../../context/AppContext";
import SimpleFab from "../ui/fab/SimpleFab";
import { Button, Container, TextField, Typography } from "@mui/material";
import { Stack } from "@mui/system";

function EmployeeAdd() {
  const { postOneEmployee } = useContext(AppContext);

  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    salary:0
  });

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleClear = () => {
    setValues({
      firstName: "",
      lastName: "",
      salary:0
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    postOneEmployee({ ...values, salary: 10 });

    setValues({
      firstName: "",
      lastName: "",
      salary:0
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
            value={values?.firstName}
          />

          <TextField
            label="Last Name"
            id="lastName"
            name="lastName"
            placeholder="Last Name"
            type="text"
            onChange={handleChange}
            value={values?.lastName}
          />

          <TextField
            label="Salary"
            id="salary"
            name="salary"
            placeholder="Salary"
            type="text"
            onChange={handleChange}
            value={values?.lastName}
          />

          <Stack direction="row" spacing={2} alignItems="center" justifyContent="center"  >
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
