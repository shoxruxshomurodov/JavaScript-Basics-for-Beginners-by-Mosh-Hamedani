//🧐🧐🧐 Control Flow 🧐🧐🧐
/*
Conditionals:
    if...else
    switch case
*/
//✌✌✌ If...else✌✌✌

//Hour
//If hour is between 6am and 12pm: Good Morning!
//If hour is between 12pm and 6pm: Good Afternoon!
//Otherwise: Good Evening!
let hour = 19;
if (hour >= 6 && hour < 12) {
  console.log("Good Morning!");
}
if (hour >= 12 && hour < 18) {
  console.log("Good Afternoon!");
} else {
  console.log("Good Evening!");
}

//✌✌✌ Switch and case✌✌✌
let role = "guest";

switch (role) {
  case "guest":
    console.log("Guest User");
    break;
  case "moderator":
    console.log("Moderator User");
    break;
  default:
    console.log("Unknown User");
    break;
}

// ✌✌✌For Loop✌✌✌
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
for (let i = 0; i <= 5; i++) {
  console.log("Hello World", i);
}

// ✌✌✌While Loop✌✌✌
let i = 0;
while (i <= 5) {
  console.log("Hello Shox", i);
  i++;
}

// ✌✌✌Do. While Loop✌✌✌
let k = 0;
do {
  console.log("Hello again Shoxrux", k);
  k++;
} while (k <= 10);

// ✌✌✌Infinite Loop✌✌✌
let j = 0;
while (j < 5) {
  console.log(i);
  j++; //If we don't add this line , create  infinite loop🤦‍♂️
}
// while (true) {}
// do {} while (true);
// for (let i = 0; i > 0; i++) {}

// ✌✌✌For in Loop✌✌✌
const person = {
  name: "shoxrux",
  age: 23,
};
for (const key in person) {
  console.log(key, person[key]);
}
//Dot notation
person.name;
//Bracket notation
person["name"];

const colors = ["red", "green", "yellow"];
for (let index in colors) {
  console.log(index, colors[index]);
}

// ✌✌✌For of Loop✌✌✌
for (let color of colors) {
  console.log(color);
}

// ✌✌✌Break & Continue✌✌✌
let v = 0;
while (v <= 10) {
  // if (v === 5) break;
  if (v % 2 === 0) {
    v++;
    continue;
  }
  console.log(v, "break");
  v++;
}

//🏋️‍♂️🏋️‍♂️🏋️‍♂️ Execise Max of Two Numbers 🏋️‍♂️🏋️‍♂️🏋️‍♂️

// Write a function that takes
// two numbers and returns the maximum of two

function findMax(a, b) {
  if (a > b) {
    console.log(`${a} is bigger than ${b}`);
  }
  if (b > a) {
    console.log(`${b} is bigger than ${a}`);
  } else {
    console.log(`${a} is equal ${b}`);
  }
}

findMax(12, 24);

function max(a, b) {
  if (a > b) return a;
  return b;
  // return a > b ? a : b;
}

//🏋️‍♂️🏋️‍♂️🏋️‍♂️ Landscape or Portrait 🏋️‍♂️🏋️‍♂️🏋️‍♂️

function isLandscape(width, height) {
  // if (width > height) {
  //   return true;
  // } else {
  //   return false;
  // }
  return width > height;
}

//🏋️‍♂️🏋️‍♂️🏋️‍♂️FizzBuzz 🏋️‍♂️🏋️‍♂️🏋️‍♂️

// function fizzBuzz(number) {
//   if (number % 3 === 0 && number % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (number % 3 === 0) {
//     console.log("Fizz");
//   } else if (number % 5 === 0) {
//     console.log("Buzz");
//   }
// }
// fizzBuzz(5);

function fizzBuzz(input) {
  if (typeof input !== "number") {
    return "Not a number";
  }
  if (input % 3 === 0 && input % 5 === 0) {
    return "FizzBuzz";
  }
  if (input % 3 === 0) {
    return "Fizz";
  }
  if (input % 5 === 0) {
    return "Buzz";
  }
}
const output = fizzBuzz(5);
console.log(output);

//🏋️‍♂️🏋️‍♂️🏋️‍♂️ Demerit Points🏋️‍♂️🏋️‍♂️🏋️‍♂️
// Speed Limit = 70
// 5 -> 1point
// 12points -> suspended

function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;

  if (speed < speedLimit + kmPerPoint) {
    console.log("OK");
  } else {
    const point = Math.floor((speed = speedLimit) / kmPerPoint);
    if (point >= 12) {
      console.log("Licence suspended");
    } else {
      console.log("Points:", point);
    }
  }
}

checkSpeed(180);

//🏋️‍♂️🏋️‍♂️🏋️‍♂️ Even and Odd Numbers 🏋️‍♂️🏋️‍♂️🏋️‍♂️
function showNumbers(limit) {
  // for (let i = 0; i <= limit; i++) {
  //   if (i % 2 === 0) {
  //     console.log(i, "EVEN");
  //   } else {
  //     console.log(i, "ODD");
  //   }
  // }
  const message = i % 2 === 0 ? "EVEN" : "ODD";
  console.log(i, message);
}

showNumbers(12);

//🏋️‍♂️🏋️‍♂️🏋️‍♂️ Count Truthy 🏋️‍♂️🏋️‍♂️🏋️‍♂️
function countTruthy(array) {
  let count = 0;
  for (const value of array) {
    if (value !== false && value !== undefined) {
      count++;
    }
  }
  return count;
}

console.log(countTruthy([null, 0, "", 1, 2, 3, 4, undefined]));

//🏋️‍♂️🏋️‍♂️🏋️‍♂️ String Properties 🏋️‍♂️🏋️‍♂️🏋️‍♂️

const movie = {
  title: "A",
  releaseYear: 2018,
  rating: 4.5,
  drictor: "B",
};

showProperties(movie);
function showProperties(obj) {
  for (const key in obj) {
    if (typeof obj[key] === "string") {
      console.log(key, obj[key]);
    }
  }
}

//🏋️‍♂️🏋️‍♂️🏋️‍♂️ Sum of Multiples 3 and 5 🏋️‍♂️🏋️‍♂️🏋️‍♂️
// Multiples of 3: 3, 6, 9
// Multiples of 5: 5, 10
function sum(limit) {
  let sum = 0;
  for (let i = 0; i <= limit; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}

console.log(sum(10), "SUM");

//🏋️‍♂️🏋️‍♂️🏋️‍♂️ Exercise - Grade 🏋️‍♂️🏋️‍♂️🏋️‍♂️
const marks = [80, 80, 90];

// 1-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A
function calculateGrade(marks) {
  const average = calculateAverage(marks);
  if (average < 60) return "Grade is F " + average;
  if (average < 70) return "Grade is D " + average;
  if (average < 80) return "Grade is C " + average;
  if (average < 90) return "Grade is B " + average;
  return "Grade is A " + average + "A";
}

function calculateAverage(marks) {
  let sum = 0;
  for (let mark of marks) {
    sum += mark;
  }
  let average = sum / marks.length;
  return average;
}
console.log(calculateGrade(marks));

//🏋️‍♂️🏋️‍♂️🏋️‍♂️ Exercise - Stars 🏋️‍♂️🏋️‍♂️🏋️‍♂️

function showStars(rows) {
  for (let row = 1; row <= rows; row++) {
    let pattern = "";
    for (let i = 0; i < row; i++) {
      pattern += "*";
    }
    console.log(pattern);
  }
}
showStars(2);

//🏋️‍♂️🏋️‍♂️🏋️‍♂️ Prime Numbers🏋️‍♂️🏋️‍♂️🏋️‍♂️
// Prime (whose factory are only 1 and itself)
// Composite

// function showPrimes(limit) {
//   for (let number = 2; number <= limit; number++) {
//     let isPrime = true;
//     for (let factor = 2; factor < number; factor++) {
//       if (number % factor === 0) {
//         isPrime = false;
//         break;
//       }
//     }
//     if (isPrime) {
//       console.log(number);
//     }
//   }
// }

function showPrimes(limit) {
  for (let number = 2; number <= limit; number++) {
    if (isPrime(number)) {
      console.log(number);
    }
  }
}
function isPrime(number) {
  for (let factor = 2; factor < number; factor++) {
    if (number % factor === 0) {
      return false;
    }
  }
  return true;
}
showPrimes(20);
