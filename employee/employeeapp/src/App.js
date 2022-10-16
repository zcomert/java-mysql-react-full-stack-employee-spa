import { useState } from "react";
import EmployeeAdd from "./components/employeeAdd/EmployeeAdd";
import EmployeeList from "./components/employeeList/EmployeeList";
import {employees} from "./data/data"

function App() {

  const [list, setList] = useState(employees);

  return (
    <div>
      <h1>Employees App </h1>
      <EmployeeList employees = {list} setList = {setList} />
      <EmployeeAdd employees = {list} setList = {setList} />
    </div>
  );
}

export default App;
