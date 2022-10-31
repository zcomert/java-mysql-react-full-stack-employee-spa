import { useContext, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Counter from "./components/counter/Counter";
import EmployeeAdd from "./components/employeeAdd/EmployeeAdd";
import EmployeeList from "./components/employeeList/EmployeeList";
import EmployeeUpdate from "./components/employeeUpdate/EmployeeUpdate";
import AppContext from "./context/AppContext";


function App() {
  const { appName, employees, setList, selectedEmployee, setSelectedEmployee } = useContext(AppContext);
  return (
    <div>
      <h1> {appName} </h1>

      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/employees">Employees</Link></li>
        <li><Link to="/employees/add">Add Employee</Link></li>
        <li><Link to="/counter">Counter</Link></li>
      </ul>

      <Routes>
        <Route path="/employees" element={<EmployeeList />} />
        <Route path="/employees/add" element={<EmployeeAdd />} />
        <Route path="/employees/update/:id" element={<EmployeeUpdate />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
      
    </div>
  );
}

export default App;
