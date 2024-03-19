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

//conditional statements
let hour = 10;
if (hour >= 6 && hour < 12) {
  console.log("Good morning");
} else if (hour >= 12 && hour < 18) {
  console.log("Good afternoon");
} else {
  console.log("good evening");
}

let nber = "two";

switch (nber) {
  case "one":
    console.log(1);
    break;
  case "two":
    console.log(2);
    break;
  default:
    console.log("neither 1 nor 2");
}

//LOOPS
for (let i = 0; i < 6; i++) {
  console.log(i);
}

let i = 0;
while (i < 6) {
  if (i % 2 !== 0) console.log(i);
  i++;
}

i = 0;
do {
  if (i % 2 !== 0) console.log(i);
  i++;
} while (i < 6);

//for...in -> used in objects
for (const key in person) {
  console.log(key, person[key]);
}

const colors = ["green", "red", "blue", "gold"];
// for...of -> used in arrays
for (const iterator of colors) {
  console.log(iterator);
}

// Fizz-Buzz problem:
console.log("Fizz-Buzz problem");

console.log(fizzBuzz("dh"));
function fizzBuzz(nber) {
  if (typeof nber !== "number") return "not a number";
  if (nber % 3 === 0 && nber % 5 === 0) return "FizzBuzz";
  if (nber % 3 === 0) return "Fizz";
  if (nber % 5 === 0) return "Buzz";
  return nber;
}

// Prime numbers
function prime(n) {
  if (n < 2) return n + " is not a prime number";
  else {
    for (let i = 2; i <= n / 2; i++)
      if (n % i === 0) return n + " is not a prime number";
    return n + " is a prime number";
  }
}
console.log(prime(23));

// Prime numbers bellow a number
function primeBellow(n) {
  let prime = [];
  if (n < 2) return "there is not a prime number under " + n;
  else {
    for (let i = 2; i <= n; i++) {
      let isPrime = true;
      for (let j = 2; j < i; j++) {
        if (i % j === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        console.log(i);
      }
    }
  }
}
primeBellow(20);

// printing stars
function stars(nber) {
  for (let line = 0; line <= nber; line++) {
    let star = "";
    for (col = 0; col < line; col++) {
      star += "*";
    }
    console.log(star);
  }
}
stars(2);
