// Basic Object
let student = {
  name: "Adarsh",
  age: 20,
  grades: [85, 90, 78],
};

// Access/Modify
console.log(student.name); // "Adarsh"
student.age = 21; // Update
delete student.grades; // Remove

// Method
student.greet = function () {
  return `Hi, I'm ${this.name}!`; // 'this' refers to object
};
console.log(student.greet()); // "Hi, I'm Adarsh!"

// ES6 Destructuring
const { name, age } = student;
console.log(name, age); // "Adarsh" 21