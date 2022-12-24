import axios from "axios";

class EmployeeService {
  constructor() {
    this.baseUrl = "http://localhost:8082/api/employees";
  }

  async getAllEmployees() {
    return await axios.get(this.baseUrl).then((response) => response.data);
  }

  async postOneEmployee(employee) {
    return await axios.post(this.baseUrl, employee).then((resp) => resp.data);
  }

  async putOneEmployee(id, employee) {
    const url = this.baseUrl + "/" + id;
    return await axios.put(url, employee).then((resp) => resp.data);
  }

  async deleteOneEmployee(id) {
    const url = this.baseUrl + "/" + id;
    return await axios.delete(url);
  }
}
export default EmployeeService;
