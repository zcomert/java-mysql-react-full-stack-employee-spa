let employees = [
  { id: 1, firstName: "Can", lastName: "Dağ", age: 10 },
  { id: 2, firstName: "Oya", lastName: "Tepe", age: 20 },
  { id: 3, firstName: "Ali", lastName: "Yıldız", age: 30 },
  { id: 4, firstName: "Berk", lastName: "Nehir", age: 40 },
];
const newEmployee = { id: 5, firstName: "Alp", lastName: "Işık", age: 35 };
employees.push(newEmployee);

console.log(employees);

const newArray = [
  ...employees,
  {
    id: 6,
    firstName: "Fatma",
    lastName: "Çimen",
    age: 30,
  },
];
console.log(newArray);
