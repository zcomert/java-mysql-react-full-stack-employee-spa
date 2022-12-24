import axios from "axios";

const url = "http://localhost:8082/api/employees";

const resp = await axios.get(url);
console.log(resp.status, resp.data);

// const {status, data} = await axios.post(url, {
//   firstName: "Merve",
//   lastName: "Irmak",
//   salary: 750,
// });

// console.log(status,data);
