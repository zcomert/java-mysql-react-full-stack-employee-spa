import React from 'react'

export default function Employee({employee, handleRemove}) {

  return (
    <div key={employee.id}>
      {employee.firstName} {employee.lastName}
      <button onClick={() => handleRemove(employee.id)} >Remove</button>
    </div>
  )
}
