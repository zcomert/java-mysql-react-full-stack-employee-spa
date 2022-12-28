import { Route, Routes } from "react-router-dom";
import Counter from "./components/counter/Counter";
import EmployeeAdd from "./components/employeeAdd/EmployeeAdd";
import EmployeeList from "./components/employeeList/EmployeeList";
import EmployeeUpdate from "./components/employeeUpdate/EmployeeUpdate";
import SimpleAppBar from "./components/ui/appbar/SimpleAppBar";


function App() {
  
  return (
    <div>
      <SimpleAppBar />
      <br/><br/><br/><br/>
      
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
