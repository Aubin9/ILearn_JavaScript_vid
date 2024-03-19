console.log("Hello world !!");
let name = "Aubin";
let age = 19;
let isApproved = false;
let firstName = undefined;
let selectColor = null;
console.log(typeof age);

// OBJECTS
let person = {
  name: "Aubin",
  age: 19,
};
console.log(person.name);

// ARRAYS
let selectedColors = ["green", "red", "tomato", "gold", "cian", "blue"];
console.log(selectedColors);
console.log(selectedColors[2]);
console.log(selectedColors.length);

//FUNCTIONS
function greet(name) {
  console.log("Hello " + name);
}
greet(person.name);

//Ternary operator
let myAge = 18;
let adult = myAge < 18 ? "you are not major" : "you are major";
console.log(adult);
