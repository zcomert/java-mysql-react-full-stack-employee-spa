import fetch from "node-fetch";

const url = "http://localhost:8082/api/employees";

const result = fetch(url)
    .then(response => response.json())
    .then(data => data)
// console.log(result);

const emp = {
    firstName:"Filiz",
    lastName:"Bulut",
    salary:990
}

// console.log(emp);
// console.log(JSON.stringify(emp))

let response = await fetch(url, {
    method:'POST',
    body : JSON.stringify(emp),
    headers:{
        'Content-Type':"application/json"
    }
});
response =  await response.json();
console.log(response)