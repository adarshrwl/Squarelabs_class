// Basic Object
let student = {
  name: "Adarsh",
  // key:value
  age: 20,
  // key value
  grades: [85, 90, 78],
  // key value
};

console.log(student.name);
student.name = "testingg!!";
console.log(student.name);

console.log("First Grade:", student.grades[1]);
// Access/Modify
console.log(student.name); // "Adarsh"
student.age = 25; // Update
delete student.grades; // Remove

// ES6 Destructuring
const { name, age } = student;
console.log(name, age); // "Adarsh" 21

let fruits = {
  name: "Mango",
  quantity: 1,
};
console.log(fruits);

// Method
fruits.greet = function () {
  return `Hi, I'm ${this.name}!`; // 'this' refers to object
};
console.log(fruits.greet()); // "Hi, I'm Adarsh!"
