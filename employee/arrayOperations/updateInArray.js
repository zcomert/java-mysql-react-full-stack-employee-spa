let employees = [
  { id: 1, firstName: "Can", lastName: "Dağ", age: 10 },
  { id: 2, firstName: "Oya", lastName: "Tepe", age: 20 },
  { id: 3, firstName: "Ali", lastName: "Yıldız", age: 30 },
  { id: 4, firstName: "Berk", lastName: "Nehir", age: 40 },
];

console.log(employees);

const newArray = [
  ...employees.filter((emp) => emp.id !== 3),
  { id: 3, firstName: "Veli", lastName: "Yıldız", age: 30 },
];
console.log(newArray);
