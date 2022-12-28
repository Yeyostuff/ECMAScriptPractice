//Existen dos tipos de spread de reestructuración:
//Primero trabajamos con arrays

//Arrays Destructuring

let fruits = ['Apple', 'Banana'];
let [a, b] = fruits;
console.log(a, fruits[1]);

//Object Destructuring:
let user = { username: "Jason", age: 29}
let { username, age} = user;
console.log(username, age);     