const message = "Hello world.";
console.log(message);

let i = 1;
while (i < 5) {
  console.log(i);
  i++;
}

const employees = [
    "Ahmet Dağ",
    "Mehmet Tepe",
    "Filiz Irmak",
    "Fatma Güneş"
]

console.log("for loop")
for (let index = 0; index < employees.length; index++) {
    const element = employees[index];
}

console.log("for of")
for (const emp of employees) {
    console.log(emp)
}

const root = document.getElementById("root");

console.log("map")
employees.map(emp => {
    console.log(emp)
    const element = document.createElement("p");
    element.innerHTML = emp;
    root.append(element);
})