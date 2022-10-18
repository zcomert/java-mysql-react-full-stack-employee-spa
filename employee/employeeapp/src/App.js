import { useContext, useState } from "react";
import EmployeeAdd from "./components/employeeAdd/EmployeeAdd";
import EmployeeList from "./components/employeeList/EmployeeList";
import EmployeeUpdate from "./components/employeeUpdate/EmployeeUpdate";
import AppContext from "./context/AppContext";


function App() {
  const { appName, employees, setList, selectedEmployee, setSelectedEmployee } = useContext(AppContext);

  
  

  return (
    <div>
      <h1> {appName} </h1>
      <EmployeeList />
      <EmployeeAdd  />
      <EmployeeUpdate />
    </div>
  );
}

export default App;
