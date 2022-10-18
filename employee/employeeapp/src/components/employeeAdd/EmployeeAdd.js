import { useContext, useState } from "react";
import AppContext from "../../context/AppContext";

function EmployeeAdd() {
  const { employees, setList } = useContext(AppContext);

  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
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
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setList([
      ...employees,
      {
        id: employees.length + 1,
        ...values,
      },
    ]);

    setValues({
      firstName: "",
      lastName: "",
    });
  };

  return (
    <>
      <h3>Employee Add</h3>
      <form onSubmit={handleSubmit}>
        <p>
          <input
            id='firstName'
            name='firstName'
            placeholder='First Name'
            type='text'
            onChange={handleChange}
            value={values?.firstName}
          />
        </p>
        <p>
          <input
            id='lastName'
            name='lastName'
            placeholder='Last Name'
            type='text'
            onChange={handleChange}
            value={values?.lastName}
          />
        </p>
        <button type='submit'>Save</button>
        <button onClick={handleClear} type='button'>
          Clear
        </button>
      </form>
    </>
  );
}

export default EmployeeAdd;
