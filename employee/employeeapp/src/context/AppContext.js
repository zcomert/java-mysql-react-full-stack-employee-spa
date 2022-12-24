import { createContext, useEffect, useState } from "react";
import EmployeeService from "../services/EmployeeService";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [employees, setList] = useState([]);

  useEffect(() => {
    getAllEmployees();
  }, []);

  const employeeService = new EmployeeService();

  const getAllEmployees = () => {
    employeeService.getAllEmployees().then((resp) => setList(resp));
  };

  const postOneEmployee = (employee) => {
    employeeService
      .postOneEmployee(employee) // action : service -> backend
      .then((resp) => setList([...employees, resp])); // reducer -> state
  };

  const putOneEmployee = (id, employee) => {
    employeeService
      .putOneEmployee(id, employee)
      .then((resp) =>
        setList([...employees.filter((emp) => emp.id !== id), resp])
      );
  };

  const deleteOneEmployee = (id) => {
    employeeService
      .deleteOneEmployee(id)    // action
      .then((resp) => setList([...employees.filter((emp) => emp.id !== id)])); // reducer
  };

  const [selectedEmployee, setSelectedEmployee] = useState({
    id: 0,
    firstName: "",
    lastName: "",
  });

  const values = {
    appName: "Employee App",
    employees,
    setList,
    selectedEmployee,
    setSelectedEmployee,
    postOneEmployee,
    putOneEmployee,
    deleteOneEmployee
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export default AppContext;
