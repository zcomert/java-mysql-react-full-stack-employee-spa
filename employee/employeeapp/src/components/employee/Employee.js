import React from 'react'

export default function Employee({employee, handleRemove, setSelectedEmployee}) {

  const handleSelectedEmployee = (emp) => {
    setSelectedEmployee(emp);
  }

  return (
    <div key={employee.id}>
      {employee.firstName} {employee.lastName}
      <button onClick={() => handleRemove(employee.id)} >Remove</button>
      <button onClick={() => handleSelectedEmployee(employee)} >Select</button>
    </div>
  )
}
