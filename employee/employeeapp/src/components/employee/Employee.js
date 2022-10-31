import React from "react";
import { useNavigate } from "react-router-dom";

export default function Employee({
  employee,
  handleRemove,
  setSelectedEmployee,
}) {
  const navigate = useNavigate();

  const handleSelectedEmployee = (emp) => {
    setSelectedEmployee(emp);
    navigate(`/employees/update/${emp.id}`);
  };

  return (
    <div key={employee.id}>
      {employee.firstName} {employee.lastName}
      <button onClick={() => handleRemove(employee.id)}>Remove</button>
      <button onClick={() => handleSelectedEmployee(employee)}>Select</button>
    </div>
  );
}
