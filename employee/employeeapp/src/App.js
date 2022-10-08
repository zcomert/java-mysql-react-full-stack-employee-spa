import {employees} from "./data/data"

function App() {
  
  return (
    <div>
      <h1>Employees ({employees.length}) </h1>
      {employees.map((emp) => (
        <p>{emp}</p>
      ))}
    </div>
  );
}

export default App;
