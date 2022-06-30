//🧐🧐🧐 Functions 🧐🧐🧐
//✌✌✌ Functions Declaration VS Functions Declaration✌✌✌

//Function Declaration
function walk() {
  console.log("walk");
}
//Function Expression
const run = function run() {
  console.log("run");
};

//Anonymous Function Expression
let runA = function () {
  console.log("Anonymous run");
};

let move = runA; //Referencing same Anonymous function, WHICH IS OBJECT IN MEMORY move()

//✌✌✌ Hoisting ✌✌✌

//Function Declaration
jog();
function jog() {
  console.log("Jogging");
}

//Function Expression
// fight(); Error
const fight = function () {
  console.log("Fighting");
};

//✌✌✌ Arguments ✌✌✌

function sum(a, b) {
  console.log(arguments); //return object
  return a + b;
}
// console.log(sum(1, 3, 5, 65, 7));

function sumArray(a, b) {
  console.log(arguments); //{ '0': 1, '1': 234, '2': 5, '3': 6, '4': 7, '5': 8 }
  let total = 0;
  for (let value of arguments) {
    total += value;
  }
  return total;
}

// console.log(sumArray(1, 234, 5, 6, 7, 8));

//✌✌✌ The Rest Operator ✌✌✌

function sumRest(...args) {
  return args.reduce((a, b) => a + b);
}
console.log(sumRest(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

function sumDiscount(discount, ...args) {
  //Rest parameter last Parameter
  const total = args.reduce((a, b) => a + b);
  return total * (1 - discount);
}
console.log(sumDiscount(0.1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

//✌✌✌ Default  Parameters ✌✌✌
function interest(principal, rate = 3.5, years = 5) {
  // rate = rate || 3.5;
  // year = year || 5;
  return ((principal * rate) / 100) * years;
}
console.log(interest(10000));

//✌✌✌Getters and Setters ✌✌✌

const person = {
  firstName: "Shoxrux",
  lastName: "Shomurodov",
  // fullName: function () {},
  get fullName() {
    return `${person.firstName} ${person.lastName}`;
  },
  set fullName(value) {
    const parts = value.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};
// getters => access properties
// setters => change (mutate) properties
person.fullName = "Muhtarama Shomurodova";
console.log(person.fullName);

//✌✌✌ Try and Catch ✌✌✌

const personErr = {
  firstName: "Shoxrux",
  lastName: "Shomurodov",
  set fullNames(value) {
    if (typeof value !== "string") throw new Error("Value is not a string");
    const parts = value.split(" ");
    if (parts.length !== 2) throw new Error("Enter a first and last name");
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};

try {
  personErr.fullNames = null;
} catch (error) {
  console.log(error);
}
console.log(personErr);

//✌✌✌ Local vs. Global Scope ✌✌✌

/*
{
  const message = "Hello Bro";
}
console.log(message); //ReferenceError: message is not defined
 */

function start() {
  const message = "Hello Bro"; //We can't use outside the function
  if (true) {
    const another = "Bye , Bro";
  }
  // console.log(another); ReferenceError: another is not defined

  for (let i = 0; i < 5; i++) {
    console.log(i); // 0,1,2,3,4
  }
  // console.log(i); ReferenceError: i is not defined
}
start();

const color = "red"; // Global Scope

function stop() {
  const color = "black";
  const message = "Bye, Bro";
  console.log(color); //black
}
stop();

//✌✌✌ Let  vs. Var ✌✌✌

let x = 12;
var y = 13;

function startLet() {
  for (let i = 0; i < 5; i++) {
    console.log(i); // 0,1,2,3,4
  }
  // console.log(i);ReferenceError: i is not defined
}
startLet();

function startVar() {
  for (var i = 0; i < 5; i++) {
    console.log(i); // 0,1,2,3,4
  }
  console.log(i); // 0,1,2,3,4
}
startVar();
//🏋️‍♂️🏋️‍♂️🏋️‍♂️ Prime Numbers🏋️‍♂️🏋️‍♂️🏋️‍♂️const num

//Var become window object
var win = "We , win";
console.log(window.win); //We , win

//✌✌✌ The "THIS" Keyword ✌✌✌

//method => object
// function => global (window, global)

const video = {
  title: "A",
  play() {
    console.log(this);
  },
};
video.play();

video.stop = function () {
  console.log(this);
};
video.stop();

function playVideo() {
  console.log(this);
}
playVideo();

const Video = function (title) {
  this.title = title;
  console.log(this);
};

const v = new Video("Hello");

const video2 = {
  title: "Hello",
  tags: ["A", "B", "C"],
  showTags() {
    this.tags.forEach(function (tag) {
      console.log(this.title, tag); //"this" not global window object
    }, this);
  },
};

video2.showTags();

//✌✌✌ Changing This ✌✌✌

const video3 = {
  title: "Hello",
  tags: ["A", "B", "C"],
  showTags() {
    const self = this;
    this.tags.forEach(function (tag) {
      console.log(self.title, tag);
    });
  },
};

video3.showTags();

function playVideos() {
  console.log(this);
}

playVideos.call({ name: "Shoxrux" }, 1, 2);
playVideos.apply({ name: "Shoxrux" }, [1, 2]);
const func = playVideos.bind({ name: "Shoxrux Func" });
func();
playVideos();

const videoBind = {
  title: "Hello",
  tags: ["A", "B", "C"],
  showTags() {
    this.tags.forEach(
      function (tag) {
        console.log(this.title, tag);
      }.bind(this)
    );
  },
};

videoBind.showTags();
const videoArrow = {
  title: "Hello",
  tags: ["A", "B", "C"],
  showTags() {
    this.tags.forEach((tag) => {
      console.log(this.title, tag);
    });
  },
};
videoArrow.showTags();

//🏋️‍♂️🏋️‍♂️🏋️‍♂️ Sum of Arguments 🏋️‍♂️🏋️‍♂️🏋️‍♂️

// Sum(args) => total

// function sumArguments(...params) {
//   let sum = 0;
//   if (Array.isArray(params)) {
//     for (let i = 0; i < params.length; i++) {
//       sum += params[i];
//     }
//   }
//   return sum;
// }
function sumArguments(...items) {
  if (items.length === 1 && Array.isArray(items[0])) {
    items = items[0];
  }
  return items.reduce((sum, item) => sum + item);
}
console.log(sumArguments([1, 4, 2, 5, 6, 7]));

//🏋️‍♂️🏋️‍♂️🏋️‍♂️ Area of circle 🏋️‍♂️🏋️‍♂️🏋️‍♂️

const circle = {
  radius: 2,
  get areaCircle() {
    return Math.PI * this.radius * this.radius + "sm";
  },
  set areaCircle(value) {
    const radius = value;
    this.radius = radius;
  },
};

circle.areaCircle = 2;
console.log(circle.areaCircle);

//🏋️‍♂️🏋️‍♂️🏋️‍♂️  Error Handling 🏋️‍♂️🏋️‍♂️🏋️‍♂️

const numbers = ["a", "b", "b", "c", 5, 6, 7, 8, 9, 10];
try {
  const count = countOccurrences(numbers, "b");
  console.log(count);
} catch (error) {
  console.log(error.message);
}
function countOccurrences(array, searchElement) {
  if (!Array.isArray(array)) throw new Error("Invalid Array");
  return array.reduce((acc, curr) => {
    const occurrence = curr === searchElement ? 1 : 0;
    return acc + occurrence;
  }, 0);
}
