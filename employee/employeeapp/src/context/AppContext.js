import { createContext, useState } from "react";
import {data} from "../data/data";

const AppContext = createContext();

export const AppProvider = ({ children }) => {

  const [employees, setList] = useState(data);

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
    setSelectedEmployee
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export default AppContext;
