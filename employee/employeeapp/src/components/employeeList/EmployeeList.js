import React from "react";
import Employee from "../employee/Employee";

function EmployeeList({ employees, setList }) {
  const handleClearAll = () => {
    setList([]);
  };

  const handleRemove = (id) => {
    setList(employees.filter(emp=> emp.id!==id))
  };

  return (
    <div>
      <h3>Employee List {employees.length}</h3>
      {employees.map((emp, index) => (
        <Employee key={index} employee={emp} handleRemove={handleRemove} />
      ))}
      <button onClick={handleClearAll}>Clear All</button>
    </div>
  );
}

export default EmployeeList;
