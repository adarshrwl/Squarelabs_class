//creating arrays
let fruits = ["apple", "banana", "Mango"];
//               0       1           2
//example
let test = ["apple", true, 1];

// indexing
console.log(fruits[1]);

//changing values in arrays
fruits[0] = "testing!!";
console.log(fruits);

//Methods
// push pop shift   unshift

// push adds items to the last in array
fruits.push("Litchi");
console.log(fruits);

//pop removes the last item from array
fruits.pop();
console.log("Updated arrays");
console.log(fruits);

//shift Removes the item from start
console.log(fruits.shift());
console.log(fruits);

//unshift Adds the item to start
fruits.unshift("apple");
console.log(fruits);

//finding the length of array
console.log(fruits.length);

//looping through arrays
for (let i = 0; i < fruits.length; i++) {
  console.log("fruits:", fruits[i]);
}

//easier way
for (let f of fruits) {
  //f-variable of arrays
  console.log("of:", f);
}
